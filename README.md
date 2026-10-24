# 13aus blog

Live at https://13aus.github.io/blog

## New writeup

```bash
./new-post.sh "Box Name" htb     # creates _posts/YYYY-MM-DD-box-name.md from the template
# write it up, then:
git add . && git commit -m "box-name writeup" && git push
```

Live about a minute after pushing.

- Template lives in `_drafts/writeup-template.md` (drafts are never published).
- Categories set the card label: `htb`, `thm`, `hacksmarter`, `ctf`, `research`, `tool`, `notes` (labels live in `_config.yml` under `category_labels`).
- Only publish writeups for **retired** HTB boxes (and follow THM / HackSmarter rules on active rooms).
