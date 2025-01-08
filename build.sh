#!/usr/bin/env bash

npm ci || exit $?
npm run build || exit $?

echo "stavehumle.no" > dist/CNAME