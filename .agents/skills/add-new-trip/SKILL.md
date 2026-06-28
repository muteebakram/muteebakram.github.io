---
name: add-new-trip
description: Add a numbered photo trip folder to the muteebakram.github.io Photos gallery. Use when a user adds images under assets/trips/TRIP_ID and wants Codex to inspect the originals, create Cached/Cached_* thumbnails, add trip and photo metadata to photos.js, preserve the gallery filters/lightbox/download behavior, and validate the local preview.
---

# Add New Trip

Add a new asset folder to the portfolio's existing Photos page while preserving its established data model and interaction behavior. Infer factual metadata from filenames, EXIF, and visible image content; ask the user only when the trip identity cannot be determined safely.

## Workflow

1. Inspect the repository state, `photos.js`, `photos.html`, relevant styles, and the new `assets/trips/<trip-id>/` directory. Preserve unrelated and pre-existing changes.
2. Inventory original JPEG files at the trip directory root. Exclude `Cached/` and never alter an original image.
3. Read dimensions, capture timestamps, and available EXIF. Visually inspect representative or ambiguous photos to create concise titles, descriptive alt text, dates, and consistent location labels.
4. Determine the trip's display name and year from reliable evidence. If the identity remains uncertain and choosing would materially affect the gallery, ask the user before changing metadata.
5. Run `scripts/cache_trip_images.sh assets/trips/<trip-id>` from the repository root. This creates or refreshes 1200-pixel cached JPEGs named `Cached_<original filename>`.
6. Add the trip to `window.photoTrips` in `photos.js` with `Name` and `Year`.
7. Add one `window.photos` record per original using the existing schema: `Id`, `Src`, `CachedSrc`, `Title`, `Alt`, `Date`, `Year`, `Trip`, and `Location`. Use unique kebab-case IDs and browser-safe relative paths. Keep photos chronological within a trip and place the newest trip before older trips unless the project establishes a different ordering rule.
8. Preserve the current behavior: cards load `CachedSrc`; the lightbox and downloads use the full-resolution `Src`; Trip, Year, and Location filter values derive from the manifest; and trip headers derive from `window.photoTrips`.
9. Do not commit, push, deploy, or rewrite originals unless the user explicitly requests that separate action.

## Validation

- Run a JavaScript syntax check on `photos.js` and any other script changed.
- Verify every `Src` and `CachedSrc` path exists and every photo `Id` is unique.
- Confirm the total count, new-trip count, chronological ordering, trip grouping, and individual/combined/zero-result filter cases.
- Check that each cached file is smaller than its original and has a maximum dimension no larger than 1200 pixels.
- Start or reuse the repository's documented local server, confirm the Photos page and new assets return successfully, and open or refresh the local Photos preview when browser control is available.
- Run `git diff --check` and report the live local URL. Do not claim that the browser opened unless the handoff succeeded.

## Cache Helper

`scripts/cache_trip_images.sh` accepts a trip directory, optional maximum dimension, and optional JPEG quality:

```bash
bash .agents/skills/add-new-trip/scripts/cache_trip_images.sh assets/trips/02
bash .agents/skills/add-new-trip/scripts/cache_trip_images.sh assets/trips/02 1200 80
```

The helper requires macOS `sips`, fails when the trip contains no root-level JPEGs, and is safe to rerun because it only creates or refreshes matching files inside `Cached/`.
