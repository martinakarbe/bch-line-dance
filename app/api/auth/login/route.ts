import { NextRequest, NextResponse } from "next/server";
import { verifyPassword, createSession } from "@/lib/auth-utils";
import { AuthConfigurationError } from "@/lib/env-config";

export async function POST(request: NextRequest) {
  const isJsonRequest = request.headers.get("content-type")?.includes("application/json") ?? false;
  const redirectToLogin = (error: "invalid" | "unavailable") =>
    NextResponse.redirect(
      new URL(`/intern/login?error=${error}`, request.url),
      303,
    );

  try {
    let password: unknown;
    if (isJsonRequest) {
      const body: unknown = await request.json();
      password = body && typeof body === "object" && "password" in body
        ? body.password
        : undefined;
    } else {
      const formData = await request.formData();
      password = formData.get("password");
    }

    if (typeof password !== "string" || !password) {
      if (!isJsonRequest) return redirectToLogin("invalid");
      return NextResponse.json(
        { error: "Passwort erforderlich" },
        { status: 400 }
      );
    }

    const isValid = await verifyPassword(password);

    if (isValid) {
      await createSession();
      if (!isJsonRequest) {
        return NextResponse.redirect(new URL("/intern", request.url), 303);
      }
      return NextResponse.json({ success: true });
    } else {
      if (!isJsonRequest) return redirectToLogin("invalid");
      return NextResponse.json(
        { error: "Falsches Passwort" },
        { status: 401 }
      );
    }
  } catch (error) {
    if (error instanceof SyntaxError) {
      return NextResponse.json({ error: "Ungültige Anfrage" }, { status: 400 });
    }

    if (error instanceof AuthConfigurationError) {
      if (!isJsonRequest) return redirectToLogin("unavailable");
      return NextResponse.json(
        { error: "Die Anmeldung ist derzeit nicht verfügbar" },
        { status: 503 }
      );
    }

    if (!isJsonRequest && error instanceof TypeError) {
      return redirectToLogin("invalid");
    }

    return NextResponse.json(
      { error: "Interner Serverfehler" },
      { status: 500 }
    );
  }
}
