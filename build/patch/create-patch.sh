#!/usr/bin/env -S bash

set -Eeuo pipefail
trap 'echo "⚠  Error ($0:$LINENO, exit code: $?): $BASH_COMMAND" >&2' ERR

tmp="$(mktemp)"

trap 'rm -f "$tmp"' EXIT

code=0

diff --recursive --no-ignore-file-name-case -u "../node_modules" "node_modules_patch" > "$tmp" || code=$?

if [[ $code -gt 1 ]]; then
    echo "⚠  diff failed with exit code $code" >&2

    exit "$code"
fi

grep -v "^Only in" "$tmp" > patch || [[ $? -eq 1 ]]
