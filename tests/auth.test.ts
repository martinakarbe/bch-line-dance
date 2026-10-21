import assert from "node:assert/strict";
import { afterEach, beforeEach, test } from "node:test";
import { NextRequest } from "next/server";
import { AuthConfigurationError } from "../lib/env-config";
import {
  createSessionToken,
  SESSION_DURATION_SECONDS,
  verifySessionToken,
} from "../lib/session";
import { proxy } from "../proxy";

const now = 1_800_000_000_000;
const originalPassword = process.env.INTERNAL_PASSWORD;
const originalSecret = process.env.INTERNAL_SESSION_SECRET;

beforeEach(() => {
  process.env.INTERNAL_PASSWORD = "a-test-password";
  process.env.INTERNAL_SESSION_SECRET = "a".repeat(64);
});

afterEach(() => {
  if (originalPassword === undefined) delete process.env.INTERNAL_PASSWORD;
  else process.env.INTERNAL_PASSWORD = originalPassword;
  if (originalSecret === undefined) delete process.env.INTERNAL_SESSION_SECRET;
  else process.env.INTERNAL_SESSION_SECRET = originalSecret;
});

test("issued sessions work until their expiration, including the last millisecond", () => {
  const token = createSessionToken(now);
  const expiresAt = now + SESSION_DURATION_SECONDS * 1000;
  assert.equal(verifySessionToken(token, now), true);
  assert.equal(verifySessionToken(token, expiresAt - 1), true);
  assert.equal(verifySessionToken(token, expiresAt), false);
  assert.equal(verifySessionToken(token, expiresAt + 1), false);
  assert.notEqual(token, createSessionToken(now));
});

test("rejects missing, legacy, and malformed cookies without throwing", () => {
  for (const token of [undefined, "", "authenticated", "123.a.b", "a".repeat(5000)]) {
    assert.equal(verifySessionToken(token, now), false);
  }
});

test("rejects changes to the expiry, nonce, or signature", () => {
  const token = createSessionToken(now);
  const [expiry, nonce, signature] = token.split(".");
  const change = (value: string) => `${value[0] === "a" ? "b" : "a"}${value.slice(1)}`;
  assert.equal(verifySessionToken(`${Number(expiry) + 1}.${nonce}.${signature}`, now), false);
  assert.equal(verifySessionToken(`${expiry}.${change(nonce)}.${signature}`, now), false);
  assert.equal(verifySessionToken(`${expiry}.${nonce}.${change(signature)}`, now), false);
});

test("rejects sessions after a password or signing key change", () => {
  const token = createSessionToken(now);
  process.env.INTERNAL_PASSWORD = "another-password";
  assert.equal(verifySessionToken(token, now), false);
  process.env.INTERNAL_PASSWORD = "a-test-password";
  process.env.INTERNAL_SESSION_SECRET = "b".repeat(64);
  assert.equal(verifySessionToken(token, now), false);
});

test("missing password, missing secret, or short secret fails closed", () => {
  const token = createSessionToken(now);
  for (const config of [
    { password: "", secret: "a".repeat(64) },
    { password: "a-test-password", secret: "" },
    { password: "a-test-password", secret: "too-short" },
  ]) {
    process.env.INTERNAL_PASSWORD = config.password;
    process.env.INTERNAL_SESSION_SECRET = config.secret;
    assert.throws(() => createSessionToken(now), AuthConfigurationError);
    assert.equal(verifySessionToken(token, now), false);
  }
});

test("login remains reachable without a session or configured credentials", () => {
  delete process.env.INTERNAL_PASSWORD;
  delete process.env.INTERNAL_SESSION_SECRET;
  const response = proxy(new NextRequest("https://example.com/intern/login"));
  assert.equal(response.headers.get("x-middleware-next"), "1");
  assert.equal(response.headers.get("location"), null);
});

test("protects internal pages and nested pages from missing or forged sessions", () => {
  for (const pathname of ["/intern", "/intern/documents"]) {
    for (const token of ["", "authenticated"]) {
      const response = proxy(new NextRequest(`https://example.com${pathname}`, {
        headers: { cookie: `internal_session=${token}` },
      }));
      assert.equal(response.status, 303);
      assert.equal(response.headers.get("location"), "https://example.com/intern/login");
    }
  }
});

test("allows internal pages with a valid session", () => {
  const response = proxy(new NextRequest("https://example.com/intern", {
    headers: { cookie: `internal_session=${createSessionToken()}` },
  }));
  assert.equal(response.headers.get("x-middleware-next"), "1");
  assert.equal(response.headers.get("location"), null);
});
