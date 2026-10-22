// =============================================================================
//  HOME PAGE PHOTO STRIP — photos come from the folder  public/photo-strip/
//  Drop .jpg / .png / .webp files in that folder (GitHub → Add file → Upload
//  files) and they appear in the strip after Vercel redeploys. Delete a file to
//  take it off the site. Runs at build time; no setup or accounts needed.
// =============================================================================

import fs from "node:fs";
import path from "node:path";

const FOLDER = "photo-strip";
const SHOWN = /\.(jpe?g|png|webp)$/i;

// --- Read an image's width/height from its header (no extra packages) -------
function jpegSize(buf) {
  let orientation = 1;
  let off = 2;
  while (off + 9 < buf.length) {
    if (buf[off] !== 0xff) { off++; continue; }
    const marker = buf[off + 1];
    const len = buf.readUInt16BE(off + 2);
    // EXIF block: phones often save photos sideways and flag the rotation here.
    if (marker === 0xe1 && buf.toString("ascii", off + 4, off + 8) === "Exif") {
      const tiff = off + 10;
      const le = buf.toString("ascii", tiff, tiff + 2) === "II";
      const u16 = (o) => (le ? buf.readUInt16LE(o) : buf.readUInt16BE(o));
      const u32 = (o) => (le ? buf.readUInt32LE(o) : buf.readUInt32BE(o));
      const ifd = tiff + u32(tiff + 4);
      const count = u16(ifd);
      for (let i = 0; i < count; i++) {
        const entry = ifd + 2 + i * 12;
        if (u16(entry) === 0x0112) { orientation = u16(entry + 8); break; }
      }
    }
    const isFrame = marker >= 0xc0 && marker <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(marker);
    if (isFrame) {
      const height = buf.readUInt16BE(off + 5);
      const width = buf.readUInt16BE(off + 7);
      return orientation >= 5 ? { width: height, height: width } : { width, height };
    }
    off += 2 + len;
  }
  return null;
}

function imageSize(file) {
  const buf = fs.readFileSync(file);
  if (buf[0] === 0xff && buf[1] === 0xd8) return jpegSize(buf);
  if (buf.toString("ascii", 1, 4) === "PNG") {
    return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
  }
  if (buf.toString("ascii", 8, 12) === "WEBP") {
    const kind = buf.toString("ascii", 12, 16);
    if (kind === "VP8X") return { width: 1 + buf.readUIntLE(24, 3), height: 1 + buf.readUIntLE(27, 3) };
    if (kind === "VP8 ") return { width: buf.readUInt16LE(26) & 0x3fff, height: buf.readUInt16LE(28) & 0x3fff };
    if (kind === "VP8L") {
      const b = buf.readUInt32LE(21);
      return { width: (b & 0x3fff) + 1, height: ((b >> 14) & 0x3fff) + 1 };
    }
  }
  return null;
}

export function getStripPhotos() {
  const dir = path.join(process.cwd(), "public", FOLDER);
  let files = [];
  try {
    files = fs.readdirSync(dir);
  } catch {
    return [];
  }

  const skipped = files.filter((f) => /\.(heic|heif)$/i.test(f));
  if (skipped.length) {
    console.warn(`Photo strip: skipped ${skipped.length} HEIC photo(s) — web browsers can't show HEIC. Upload JPGs instead.`);
  }

  return files
    .filter((f) => SHOWN.test(f))
    .map((f) => {
      let size = null;
      try { size = imageSize(path.join(dir, f)); } catch { /* unreadable → default shape */ }
      return {
        src: `/${FOLDER}/${encodeURIComponent(f)}`,
        width: size?.width || 1200,
        height: size?.height || 1600,
        alt: "Life at Calvary Chapel of Hammonton",
      };
    });
}
