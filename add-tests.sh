#!/bin/bash
find . -iname "*.[jt]s*" \
  -and \( \
    ! -path "*/__mocks__/*" \
    ! -path "*/node_modules/*" \
    ! -path "*/__tests__/*" \
    ! -name "*.test.*" \
    ! -name "*.spec.*" \
  \) \
-exec sh -c \
  'b=$(basename $1);f=${b%.*};d=$(dirname $1);e=${b##*.}; mkdir -p $d/__tests__ && > $d/__tests__/$f.test.$e' \
sh {} \;