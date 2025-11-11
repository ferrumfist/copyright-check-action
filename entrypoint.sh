#!/bin/bash
set -e

#FILES=$(find . \
#  -path "./.git" -prune -o \
#  -type f -print)
#echo "$FILES"

CHANGED_FILES=$(git diff --name-only origin/${GITHUB_BASE_REF}...origin/${GITHUB_HEAD_REF})
ecgo "$CHANGED_FILES"
