---
name: r2-image-upload-skill
description: Upload images to Cloudflare R2 from a local folder. Handles dedup, first-run setup, and returns public URLs.
metadata:
  version: 1.0.0
  requires_system:
    - name: wrangler
      description: Cloudflare CLI for R2 uploads
      check: wrangler --version
      install: npm install -g wrangler
      requires: Node.js 18+
---

# R2 Image Upload

Upload images to Cloudflare R2 from a local folder. Handles dedup (skip already-uploaded files), first-run setup, and returns public URLs.

## Triggers

- "upload images", "sync images", "push images to R2"
- "upload this image [path]"
- "what images need uploading?"
- "set up R2", "configure image uploads"

## Quick Workflow

### First Run (no config exists)

1. Check if `wrangler` CLI is installed: `wrangler --version`
   - If missing → read `references/install-wrangler.md` and walk through installation + auth
2. Check if wrangler is authenticated: `wrangler whoami`
   - If not logged in → read `references/install-wrangler.md` step 3 for auth flow
3. List available buckets: `wrangler r2 bucket list`
   - If one bucket → suggest it as default
   - If multiple → ask which one to use
   - If none → create one for them:
     ```bash
     wrangler r2 bucket create <project-name>-images
     ```
     Suggest `<project-name>-images` as the bucket name based on the current directory name.
4. Enable public access via r2.dev URL (fallback — always do this):
   ```bash
   wrangler r2 bucket dev-url enable <bucket-name> -y
   ```
5. Get the public r2.dev URL:
   ```bash
   wrangler r2 bucket dev-url get <bucket-name>
   ```
6. Ask the user: **"Do you have a domain on Cloudflare you'd like to use for images?"**
   - **If yes** → tell them to connect a custom domain (this is dashboard-only):
     1. Go to **Cloudflare Dashboard** → **R2** → select bucket → **Settings**
     2. Under **Custom Domains**, click **Connect Domain**
     3. Enter subdomain like `images.yourdomain.com`
     4. Wait for status to show Active
     5. Use `https://images.yourdomain.com` as the public URL
   - **If no** → use the r2.dev URL from step 5. Mention they can add a custom domain later.
7. Ask: **Source folder** — which folder to stage images for upload (default: `_images/`)
8. Save config to `.r2-upload.json` at project root:
   ```json
   {
     "bucket": "<bucket-name>",
     "publicUrl": "https://images.yourdomain.com OR https://pub-abc123.r2.dev",
     "sourceFolder": "_images/"
   }
   ```
9. Create empty `.r2-manifest.json` at project root (`{}`)
10. Add the source folder to `.gitignore` (the images are just a local staging area — R2 is the source of truth):
    ```
    _images/
    ```
11. Create the source folder if it doesn't exist: `mkdir -p _images`
12. Tell user to commit `.r2-upload.json`, `.r2-manifest.json`, and the `.gitignore` change

### Upload Flow

1. Read `.r2-upload.json` for config. If missing → run First Run flow
2. Read `.r2-manifest.json` for existing upload records
3. Scan `sourceFolder` for image files (`*.jpg`, `*.jpeg`, `*.png`, `*.webp`, `*.gif`, `*.svg`, `*.avif`, `*.ico`)
4. For each image file found:
   a. Compute MD5 hash: `md5 -q <filepath>` (macOS) or `md5sum <filepath>` (Linux)
   b. Look up the file's relative path in manifest
   c. **Skip** if manifest entry exists AND hash matches — log as "already uploaded"
   d. **Upload** if new or hash changed:
      ```bash
      wrangler r2 object put <bucket>/<relative-path> --file <local-path> --content-type <mime-type>
      ```
   e. Update manifest entry with new hash, public URL, and timestamp
5. Write updated `.r2-manifest.json`
6. Report summary: X uploaded, Y skipped, Z failed
7. For each newly uploaded file, output the public URL so user can copy it

### Single File Upload

When user specifies a single file path:
- Follow steps 4-6 above for just that file
- Output the public URL

### Check Status (dry run)

When user asks "what needs uploading?" or similar:
- Run steps 1-4c but don't upload anything
- Report which files are new, changed, or already synced

## Config Format

Read `references/config-schema.md` for the full schema of `.r2-upload.json` and `.r2-manifest.json`.

## Content-Type Mapping

Detect from file extension:
- `.jpg`, `.jpeg` → `image/jpeg`
- `.png` → `image/png`
- `.webp` → `image/webp`
- `.gif` → `image/gif`
- `.svg` → `image/svg+xml`
- `.avif` → `image/avif`
- `.ico` → `image/x-icon`

## Key Behaviors

- **Never re-upload unchanged files** — MD5 hash is the source of truth
- **Preserve folder structure** — `_images/blog/hero.webp` → `<bucket>/blog/hero.webp` (strip the sourceFolder prefix)
- **Report errors per file** — don't stop on first failure, continue uploading remaining files
- **Always update manifest** — even partial runs should save progress
- **Platform-aware hashing** — use `md5 -q` on macOS, `md5sum` on Linux
