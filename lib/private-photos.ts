import { readdir } from "node:fs/promises";
import { extname, join } from "node:path";

export const PRIVATE_PHOTOS_DIRECTORY = join(process.cwd(), "private-assets", "intern");

export const PRIVATE_PHOTO_CONTENT_TYPES: Record<string, string> = {
  ".avif": "image/avif",
  ".gif": "image/gif",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
};

export async function listPrivatePhotos(): Promise<string[]> {
  const entries = await readdir(PRIVATE_PHOTOS_DIRECTORY, { withFileTypes: true });

  return entries
    .filter(
      (entry) =>
        entry.isFile() &&
        !entry.name.startsWith(".") &&
        PRIVATE_PHOTO_CONTENT_TYPES[extname(entry.name).toLowerCase()],
    )
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b, "de"));
}
