import { createHmac, randomBytes, timingSafeEqual } from "node:crypto";
import { AuthConfigurationError, getAuthConfig } from "./env-config";

export const SESSION_COOKIE_NAME = "internal_session";
export const SESSION_DURATION_SECONDS = 7 * 24 * 60 * 60;

function sign(payload: string): Buffer {
  const { password, secret } = getAuthConfig();
  // Ein Passwortwechsel macht auch bereits ausgestellte Sitzungen ungültig.
  const key = createHmac("sha256", secret).update(password).digest();
  return createHmac("sha256", key).update(payload).digest();
}

export function createSessionToken(now = Date.now()): string {
  const expiresAt = now + SESSION_DURATION_SECONDS * 1000;
  const payload = `${expiresAt}.${randomBytes(32).toString("hex")}`;
  return `${payload}.${sign(payload).toString("hex")}`;
}

export function verifySessionToken(token: string | undefined, now = Date.now()): boolean {
  if (!token) return false;

  const match = /^(\d{13})\.([a-f0-9]{64})\.([a-f0-9]{64})$/.exec(token);
  if (!match) return false;

  const expiresAt = Number(match[1]);
  if (expiresAt <= now || expiresAt > now + SESSION_DURATION_SECONDS * 1000) {
    return false;
  }

  try {
    const expected = sign(`${match[1]}.${match[2]}`);
    return timingSafeEqual(Buffer.from(match[3], "hex"), expected);
  } catch (error) {
    // Ohne gültige Konfiguration bleibt der interne Bereich geschlossen.
    if (error instanceof AuthConfigurationError) return false;
    throw error;
  }
}
