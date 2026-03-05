/**
 * Image Optimization Script
 * Converts all PNG images to WebP at quality 85 (visually lossless)
 * Generates responsive variants: 480w, 1024w, 1920w
 * Keeps original PNGs as backup in _originals/ folders
 */
import sharp from "sharp";
import { readdirSync, mkdirSync, existsSync, renameSync, statSync } from "fs";
import { join, extname, basename, resolve } from "path";

const PUBLIC = resolve(process.cwd(), "public");

const IMAGE_DIRS = [
  "assets/projects",
  "assets/project-bg-image",
  "assets/backgrounds",
  "images",
];

const RESPONSIVE_WIDTHS = [480, 1024, 1920];
const WEBP_QUALITY = 85;

async function optimizeDir(relDir) {
  const dir = join(PUBLIC, relDir);
  if (!existsSync(dir)) {
    console.log(`  ⏭  Skipping ${relDir} (not found)`);
    return;
  }

  // Create _originals backup folder
  const backupDir = join(dir, "_originals");
  if (!existsSync(backupDir)) mkdirSync(backupDir, { recursive: true });

  const files = readdirSync(dir).filter(
    (f) => /\.(png|jpg|jpeg)$/i.test(f) && !f.startsWith(".")
  );

  for (const file of files) {
    const filePath = join(dir, file);
    const stat = statSync(filePath);
    if (!stat.isFile()) continue;

    const name = basename(file, extname(file));
    const sizeMB = (stat.size / 1024 / 1024).toFixed(2);
    console.log(`  📸 ${relDir}/${file} (${sizeMB} MB)`);

    // Back up original
    const backupPath = join(backupDir, file);
    if (!existsSync(backupPath)) {
      renameSync(filePath, backupPath);
    }

    const img = sharp(backupPath);
    const metadata = await img.metadata();
    const origWidth = metadata.width;

    // Generate full-size WebP (replaces original filename but as .webp)
    await sharp(backupPath)
      .webp({ quality: WEBP_QUALITY })
      .toFile(join(dir, `${name}.webp`));

    // Also keep a PNG version at reduced quality/size for fallback
    await sharp(backupPath)
      .png({ quality: 80, compressionLevel: 9 })
      .toFile(filePath);

    // Generate responsive variants
    for (const w of RESPONSIVE_WIDTHS) {
      if (w >= origWidth) continue; // Skip if variant would be larger than original
      await sharp(backupPath)
        .resize(w, null, { withoutEnlargement: true })
        .webp({ quality: WEBP_QUALITY })
        .toFile(join(dir, `${name}-${w}w.webp`));
    }

    // Report sizes
    const webpStat = statSync(join(dir, `${name}.webp`));
    const webpMB = (webpStat.size / 1024 / 1024).toFixed(2);
    console.log(`    ✅ → ${name}.webp (${webpMB} MB) + responsive variants`);
  }
}

async function main() {
  console.log("🖼️  Starting image optimization...\n");
  for (const dir of IMAGE_DIRS) {
    console.log(`📁 Processing ${dir}/`);
    await optimizeDir(dir);
    console.log();
  }
  console.log("✨ Done! Originals backed up in _originals/ folders.");
  console.log("   WebP files created alongside PNGs.");
  console.log("   Responsive variants: 480w, 1024w, 1920w");
}

main().catch(console.error);
