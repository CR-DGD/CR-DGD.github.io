---
title: Perihelion
summary: A rocket-engine simulation game. Design, build, and test engines grounded in real physics. Coming soon to Steam.
role: Founder & lead developer, Tritium Softworks
period: 2025 – present
tags: [Unity, C#, JSON, Simulation, Team lead]
order: 1
accent: "#ff7a3d"
media: /media/perihelion.mp4
aspect: "1920 / 600"
poster: /media/perihelion.jpg
links:
  - label: Wishlist on Steam
    href: "https://store.steampowered.com/app/4756030/Perihelion/"
  - label: Website
    href: "https://periheliongame.net"
  - label: Join the Discord
    href: "https://discord.gg/RNc5rr6rRa"
---

## What it is

Perihelion is a rocket-engine simulation game I founded and lead at Tritium Softworks, a three-person team. It's built in Unity with C#, with part data driven through JSON. A teammate owns the physics math and simulation model, apart from the fluid network, which is mine. I built the rest of the game around it.

## What I worked on

- **3D modeling.** I did all of the modeling in the game.
- **Team lead.** I set scope, plan milestones, and coordinate a team of 3 through to a Steam release.
- **Data-driven content.** Each part is designed to be as modular as possible. 1 main root class handles the entire part structure.
- **Fluid network.** A solver that walks propellant flow through pumps, preburners, pipes and tees. It reports 15 distinct failure modes, like starved injectors, propellant mixing and nozzle burnthrough, across 6 part types, 4 pipe types and 3 propellant combinations.
- **Engine plume.** Rebuilt from mesh + particles into a fully mesh-based Shader Graph effect driven by throttle, mixture, and chamber pressure, so it scales to different nozzles and engines. In the update that shipped it, 1% low FPS rose 15x (28 → 420) and frame time fell 71% (6.5 → 1.9 ms) at 1080p on an RTX 4070 SUPER.
- **Adaptation to input.** Each player input makes a meaningful change to the engine's output. Plume structure, output data, and failure rate all respond to even the most minuscule input.

## Hardest problem

Attaching parts together was the biggest challenge this game faced. Initially, parts were setup for a drag and drop approach, with the hierarchy mainly contained in transform parenting. That started to break down once features like save/load were added, so I tore it down completely. I rebuilt it around a 2-click setup (one click to pick up, one to attach), with the data held in a list of Part classes designed for universal compatibility. Attachment bugs went from about 10 to 0 since the switch, with no limit on part count.

## Results

- 176 Steam wishlists and 34 Discord members ahead of release (Oct 2026).
- Shown at NYC Games Festival (May 2026), LIU Spring Showcase (April 2026), and LIU Winter Playtest (December 2025), with about 10 players at each.
