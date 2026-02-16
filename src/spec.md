# Specification

## Summary
**Goal:** Regenerate all portfolio project visuals so each of the 10 existing projects has exactly 12 fully new, professional, human-designed-looking images in a new consistent style, and wire them into the Portfolio UI without broken thumbnails or image loading issues.

**Planned changes:**
- Add 120 newly generated portfolio images (12 per each of the 10 existing projects) as static assets under `frontend/public/assets/generated/` using the exact filenames provided.
- Update `frontend/src/data/projects.ts` to keep each project’s existing text fields unchanged while replacing each project’s `images` array with exactly 12 `{ src, alt }` entries pointing to the new `/assets/generated/...` files (English, non-empty alt text).
- Adjust Portfolio gallery thumbnail rendering to use a non-cropping fit behavior and ensure production-safe image loading continues to fall back to `getFallbackImagePath()` on image load errors.

**User-visible outcome:** On the Portfolio page, every project shows a refreshed set of 12 new professional images in a new human-designed style; users can browse them via thumbnails/next/previous without cropped thumbnails or broken image areas.
