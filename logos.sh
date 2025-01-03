#!/usr/bin/env zsh

for size in \
  16 \
  32 \
  64 \
  96 \
  128 \
  192 \
  196 \
  512
do
  inkscape \
    --export-width=$size \
    --export-height=$size \
    --export-filename="public/logo-$size.png" \
  "logo.svg"
done

cp "./logo.svg" "src/logo.svg"
