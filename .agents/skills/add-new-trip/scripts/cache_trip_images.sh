#!/usr/bin/env bash

set -euo pipefail

if [[ $# -lt 1 || $# -gt 3 ]]; then
  echo "Usage: $0 <trip-directory> [max-dimension] [jpeg-quality]" >&2
  exit 64
fi

trip_dir=${1%/}
max_dimension=${2:-1200}
jpeg_quality=${3:-80}

if [[ ! -d "$trip_dir" ]]; then
  echo "Trip directory does not exist: $trip_dir" >&2
  exit 66
fi

if ! command -v sips >/dev/null 2>&1; then
  echo "This helper requires the macOS sips command." >&2
  exit 69
fi

if [[ ! "$max_dimension" =~ ^[1-9][0-9]*$ ]]; then
  echo "Maximum dimension must be a positive integer." >&2
  exit 64
fi

if [[ ! "$jpeg_quality" =~ ^([1-9]|[1-9][0-9]|100)$ ]]; then
  echo "JPEG quality must be an integer from 1 to 100." >&2
  exit 64
fi

shopt -s nullglob
images=(
  "$trip_dir"/*.jpg
  "$trip_dir"/*.jpeg
  "$trip_dir"/*.JPG
  "$trip_dir"/*.JPEG
)

if (( ${#images[@]} == 0 )); then
  echo "No root-level JPEG images found in: $trip_dir" >&2
  exit 65
fi

cached_dir="$trip_dir/Cached"
mkdir -p "$cached_dir"

for image in "${images[@]}"; do
  filename=${image##*/}
  output="$cached_dir/Cached_$filename"
  sips -Z "$max_dimension" -s formatOptions "$jpeg_quality" "$image" --out "$output" >/dev/null
  echo "$output"
done

echo "Cached ${#images[@]} image(s) in $cached_dir"
