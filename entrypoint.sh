#!/bin/bash
set -e

#FILES=$(find . \
#  -path "./.git" -prune -o \
#  -type f -print)
#echo "$FILES"

CHANGED_FILES=$1

echo "Изменённые файлы:"
echo "$CHANGED_FILES"
