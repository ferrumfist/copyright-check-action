#!/usr/bin/env sh
echo "Working directory: $(ls -ln)"
COPYRIGHT_LINE="${1}"

echo "COPYRIGHT_LINE is $COPYRIGHT_LINE"

SUPPORTED_EXTENSIONS="bat|c|cc|cd|cjs|config|cpp|cs|css|dist|go|h|hpp|htm|html|in|ini|js|l|less|map|mjs|php|phtml|pl|pm|py|sh|sj|sql|tcc|tpl|ts|tsx|vbs|wxi|wxs|xml|xsd|xsl|xslt|java|yaml|toml|yml"

if [ -f .copyrightsignore ]; then
    BLACKLIST_PATTERNS=$(tr -d '\r' < .copyrightsignore | grep -v '^\s*$' | sed 's|^|^|' | paste -sd '|')
else
    BLACKLIST_PATTERNS=""
fi

FILES=$(find . -type f |
    grep -E "\.($SUPPORTED_EXTENSIONS)$" |
    grep -vE "$BLACKLIST_PATTERNS" |
    (while read -r file; do [ -f "$file" ] && echo "$file"; done || true) |
    xargs -r grep -Ls "$COPYRIGHT_LINE" |
    cat)

if [ -n "$FILES" ]; then
  echo -e "You must add \"$COPYRIGHT_LINE\" to the following files: \n$FILES"
  exit 2
else
  echo "All files contain copyright line"
fi
