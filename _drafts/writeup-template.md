---
title: "BoxName — Platform Writeup"
categories: [htb]          # htb | thm | hacksmarter | ctf | research | tool | notes
tags: [htb, linux, easy]   # platform, OS, difficulty, key techniques
excerpt: "One sentence: the attack path in plain English."
---

| Platform | OS | Difficulty | Key techniques |
|----------|----|------------|----------------|
| HTB / THM / HackSmarter | Linux / Windows | Easy | e.g. SSTI, sudo abuse |

## TL;DR

Two or three lines: how you got in, how you got root. Someone skimming
should get the whole chain from this alone.

## Recon

What you ran and **what it told you**, not just the output dump.

```bash
nmap -sC -sV -oA recon/initial $TARGET
```

## Foothold

How you got in. Name the vulnerability class and explain *why* it works,
as if teaching someone who's never seen it. That's the part you'll remember.

## Privilege Escalation

Path from foothold to root/SYSTEM. Include what you enumerated and what you
threw away. Dead ends are often more useful than the winning path.

## Loot

Creds, hashes, anything worth noting. (Redact real flags.)

## MITRE ATT&CK

| Technique | ID | Where |
|-----------|----|-------|
| Exploit Public-Facing Application | T1190 | Foothold |

## Takeaway

One thing you'd do differently, or one tool going into the kit.
If you can explain it here in plain words, you've actually learned it.
