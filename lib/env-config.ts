export class AuthConfigurationError extends Error {
  constructor() {
    super("INTERNAL_PASSWORD und INTERNAL_SESSION_SECRET müssen konfiguriert sein.");
    this.name = "AuthConfigurationError";
  }
}

export function getAuthConfig() {
  const password = process.env.INTERNAL_PASSWORD;
  const secret = process.env.INTERNAL_SESSION_SECRET;

  if (!password || !secret || Buffer.byteLength(secret, "utf8") < 32) {
    throw new AuthConfigurationError();
  }

  return { password, secret };
}
