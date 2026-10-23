---
title: Cubilete Cup
summary: A multiplayer mobile take on the Cuban dice game, live on iOS and Android. I've shipped 8 releases on a three-person team, working across UI, multiplayer, and backend.
role: Lead Unity Developer (Intern)
period: Jun 2026 – present
tags: [Unity, UI Toolkit, Firebase, Multiplayer, iOS, Android]
order: 2
accent: "#3dd6a3"
media: /media/cubilete-phone.mp4
poster: /media/cubilete-phone.jpg
links: []
---

## What it is

Cubilete Cup is a mobile multiplayer game based on Cubilete, the Cuban poker-dice game. I joined remotely as a Lead Unity Developer intern on a three-person team. It's live on the App Store and Google Play, and I've shipped 8 releases, from v0.3 to v2.0.2.

## What I worked on

- **v2.0 UI.** In the v2.0 rebuild, led by a teammate, I built the UI side in UI Toolkit from a teammate's blockout: 18 screens and the component foundation, integrating the 142-file final art set, plus the menu motion and sound.
- **Backend cutover.** Led the v1.0 → v2.0 move to a new Firebase schema with zero downtime for live players. I added 16 Cloud Functions, kept v1.0 on its own set of backend actions while v2.0 was in App Store review, and checked about 300 migrated records against the originals.
- **Player presence and connection state.** Built most of the player-presence system on Firebase Realtime Database and Firestore: who's online, and clean disconnects and reconnects mid-match.
- **Multiplayer.** Networking first ran on Photon Fusion (since replaced): one shared room per match, kept in sync with a backend match document. I coordinate 3–6 player test sessions, and fixed the 4 or so bugs they turned up.
- **Error reporting.** Built most of the Sentry error reporting with a teammate, and routed every swallowed catch and async-void entry point through one error reporter. That surfaced 3 silent bugs, which I fixed.
- **App Store releases.** Cleared 9 Apple rejections across v0.3 – v1.2. On my submissions, the time from first rejection to approval fell from 12 to 6 to 2 days, and v2.0 passed review on the first try.
- **CI/CD.** Set up the original iOS/Android pipeline, a build script run through GitHub Actions that automated about 6 manual App Store packaging steps. A teammate later rebuilt it.
- **Localization.** The app ships 404 UI strings in English and Spanish. I added the last 62 Spanish strings and fixed the layout on iPads and tablets.

## Hardest problem

Fixing and hardening the multiplayer systems. We had severe desync between players, which we traced back to every room with more than 2 players being split into 2 lobbies. We fixed it by forcing every player in a match into a single room and making a backend match class the single source of truth. Every client adapts to whatever that match document says. The fix landed about 1–2 days after we found the cause.
