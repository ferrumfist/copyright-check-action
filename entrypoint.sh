#!/bin/bash
set -e

FILES=$(find . \
  -path "./.git" -prune -o \
  -type f -print)
echo "$FILES"
