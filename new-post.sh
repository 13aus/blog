#!/usr/bin/env bash
# Usage: ./new-post.sh "Box Name" [category]
# Copies the writeup template into _posts/ with today's date.
set -euo pipefail
[ $# -ge 1 ] || { echo 'usage: ./new-post.sh "Box Name" [htb|thm|hacksmarter|ctf|research|tool|notes]'; exit 1; }

title="$1"
cat="${2:-htb}"
slug=$(echo "$title" | tr '[:upper:]' '[:lower:]' | sed -E 's/[^a-z0-9]+/-/g; s/^-|-$//g')
file="_posts/$(date +%F)-$slug.md"

[ -e "$file" ] && { echo "already exists: $file"; exit 1; }
sed -e "s/^title: .*/title: \"$title\"/" \
    -e "s/^categories: \[htb\]/categories: [$cat]/" \
    _drafts/writeup-template.md > "$file"
echo "created $file"
