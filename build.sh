#!/usr/bin/env bash

echo "Copying wordlists ..."
find wordlist/stavehumle \
  -mindepth 1 \
  -maxdepth 1 \
  -type d \
  -exec cp -Rv {} public/ \; \
|| exit $?

npm ci || exit $?
npm run build || exit $?

echo "stavehumle.no" > dist/CNAME