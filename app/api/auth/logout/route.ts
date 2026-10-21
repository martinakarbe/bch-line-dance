import { NextResponse, type NextRequest } from "next/server";
import { destroySession } from "@/lib/auth-utils";

export async function POST(request: NextRequest) {
  await destroySession();
  return NextResponse.redirect(new URL("/intern/login", request.url), 303);
}
