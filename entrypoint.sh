#!/bin/bash
set -e

#FILES=$(find . \
#  -path "./.git" -prune -o \
#  -type f -print)
#echo "$FILES"

CHANGED_FILES=$1

YEAR=$(date -u +"%Y")
COPYRIGHT_LINE="Copyright 2013-$YEAR."

echo "Изменённые файлы:"
echo "$CHANGED_FILES"

SUPPORTED_EXTENSIONS="bat|c|cc|cd|cjs|config|cpp|cs|css|dist|go|h|hpp|htm|html|in|ini|js|l|less|map|mjs|php|phtml|pl|pm|py|sh|sj|sql|tcc|tpl|ts|tsx|vbs|wxi|wxs|xml|xsd|xsl|xslt|java|yaml|toml|yml"

FILES=$(printf "%s\n" "$CHANGED_FILES" |
  grep -E "\.($SUPPORTED_EXTENSIONS)$" |
  (while read -r file; do [ -f "./$file" ] && echo "./$file"; done || true) |
  xargs -r grep -L "$COPYRIGHT_LINE" |
  cat )

if [[ -n $FILES ]]; then
  echo -e "You must add \"$COPYRIGHT_LINE\" to the following files: \n$FILES"
  exit 2
fi

exit 0
