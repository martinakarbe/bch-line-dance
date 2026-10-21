import { NextRequest, NextResponse } from "next/server";
import { verifyPassword, createSession } from "@/lib/auth-utils";
import { AuthConfigurationError } from "@/lib/env-config";

export async function POST(request: NextRequest) {
  try {
    const body: unknown = await request.json();
    const password = body && typeof body === "object" && "password" in body
      ? body.password
      : undefined;

    if (typeof password !== "string" || !password) {
      return NextResponse.json(
        { error: "Passwort erforderlich" },
        { status: 400 }
      );
    }

    const isValid = await verifyPassword(password);

    if (isValid) {
      await createSession();
      return NextResponse.json({ success: true });
    } else {
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
      return NextResponse.json(
        { error: "Die Anmeldung ist derzeit nicht verfügbar" },
        { status: 503 }
      );
    }

    return NextResponse.json(
      { error: "Interner Serverfehler" },
      { status: 500 }
    );
  }
}
