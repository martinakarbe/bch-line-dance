import { cookies } from "next/headers";
import { createHash, timingSafeEqual } from "node:crypto";
import { getAuthConfig } from "./env-config";
import {
  createSessionToken,
  verifySessionToken,
  SESSION_COOKIE_NAME,
  SESSION_DURATION_SECONDS,
} from "./session";

export async function verifyPassword(password: string): Promise<boolean> {
  const config = getAuthConfig();
  const actual = createHash("sha256").update(password).digest();
  const expected = createHash("sha256").update(config.password).digest();
  return timingSafeEqual(actual, expected);
}

export async function createSession(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE_NAME, createSessionToken(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: SESSION_DURATION_SECONDS,
    path: "/",
  });
}

export async function isAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies();
  const session = cookieStore.get(SESSION_COOKIE_NAME);
  return verifySessionToken(session?.value);
}

export async function destroySession(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE_NAME);
}
