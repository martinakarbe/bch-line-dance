import { readFile } from "node:fs/promises";
import { basename, extname, join } from "node:path";
import { NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/auth-utils";
import {
  PRIVATE_PHOTOS_DIRECTORY,
  PRIVATE_PHOTO_CONTENT_TYPES,
} from "@/lib/private-photos";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ filename: string }> },
) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Nicht angemeldet" }, { status: 401 });
  }

  const { filename } = await params;
  const contentType = PRIVATE_PHOTO_CONTENT_TYPES[extname(filename).toLowerCase()];
  if (
    !contentType ||
    basename(filename) !== filename ||
    filename.includes("\\") ||
    filename.startsWith(".")
  ) {
    return new NextResponse(null, { status: 404 });
  }

  try {
    const image = await readFile(join(PRIVATE_PHOTOS_DIRECTORY, filename));
    return new NextResponse(image, {
      headers: {
        "Cache-Control": "private, no-store",
        "Content-Type": contentType,
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch (error) {
    if (error && typeof error === "object" && "code" in error && error.code === "ENOENT") {
      return new NextResponse(null, { status: 404 });
    }

    throw error;
  }
}
