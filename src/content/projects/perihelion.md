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
# poster: /media/perihelion.jpg
links:
  - label: Wishlist on Steam
    href: "https://store.steampowered.com/app/4756030/Perihelion/"
  - label: Website
    href: "https://periheliongame.net"
  - label: Join the Discord
    href: "https://discord.gg/RNc5rr6rRa"
---

## What it is

Perihelion is a rocket-engine simulation game I founded and lead at Tritium Softworks, a three-person team. It's built in Unity with C#, with part data driven through JSON. A teammate owns the physics math and simulation model; I built the rest of the game around it.

## What I worked on

- **3D modeling.** I did all of the modeling in the game.
- **Team lead.** I set scope, plan milestones, and coordinate a team of 3 through to a Steam release.
- **Data-driven content.** Each part is designed to be as modular as possible. 1 main root class handles the entire part structure.
- **Adaptation to input.** Each player input makes a meaningful change to the engine's output. Plume structure, output data, and failure rate all respond to even the most minuscule input.

## Hardest problem

Attaching parts together was the biggest challenge this game faced. Initially, parts were setup for a drag and drop approach, with the hierarchy mainly contained in transform parenting. That started to break down once features like save/load were added, so I tore it down completely. I rebuilt it around a 2-click setup (one click to pick up, one to attach), with the data held in a list of Part classes designed for universal compatibility.

## Results

166 wishlists ahead of release.
