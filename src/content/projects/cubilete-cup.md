---
title: Cubilete Cup
summary: A multiplayer mobile take on the Cuban dice game. I lead the Unity side, covering networking, UI, and the iOS/Android release pipeline.
role: Lead Unity Developer (Intern)
period: Jun 2026 – present
tags: [Unity, Photon Fusion, Multiplayer, iOS, Android, GitHub Actions]
order: 2
accent: "#3dd6a3"
media: /media/cubilete-phone.mp4
links: []
---

## What it is

Cubilete Cup is a mobile multiplayer game based on Cubilete, the Cuban poker-dice game. I joined remotely as Lead Unity Developer.

## What I worked on

- **Multiplayer networking** with Photon Fusion: one shared room per match, kept in sync with a backend match document.
- **Player presence and connection state.** Systems that track who's online and handle disconnects and reconnects cleanly mid-match.
- **CI/CD release pipelines** for iOS and Android: a build script run through GitHub Actions, so builds ship without hand-holding.
- **UI upgrades** across the game.

## Hardest problem

Fixing and hardening the multiplayer systems. We had severe desync between players, which we traced back to players being put in different lobbies. We fixed it by forcing every player in a match into a single room and making a backend match class the single source of truth. Every client adapts to whatever that match document says.
