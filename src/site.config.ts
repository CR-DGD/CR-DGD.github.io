// ─────────────────────────────────────────────────────────────
//  Edit this file first. Everything personal lives here.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: "Connor Rowland", // TODO: confirm how you want your name shown
  role: "Game & Software Developer",
  tagline:
    "I build simulation games, multiplayer systems, and the occasional flight computer. Senior BFA in Digital Game Development at LIU Post.",
  location: "New York · open to relocation",
  status: "Open to entry-level roles in game development and software engineering.",

  // Leave a link as "" to hide it.
  links: {
    email: "crgamedeveloper@gmail.com",
    github: "https://github.com/CR-DGD",
    linkedin: "https://www.linkedin.com/in/connor-rowland-dgd/",
    steam: "https://store.steampowered.com/app/4756030/Perihelion/",
    itch: "https://crdgd.itch.io",
    resume: "/resume.pdf", // drop your resume at public/resume.pdf
  },

  experience: [
    {
      title: "Lead Unity Developer (Intern)",
      org: "Cubilete Cup",
      when: "Jun 2026 – Present",
      detail:
        "UI upgrades, Photon Fusion multiplayer networking, player-presence and connection-state systems, iOS/Android CI/CD release pipelines.",
    },
    {
      title: "Founder & Lead Developer",
      org: "Tritium Softworks",
      when: "May 2025 – Present",
      detail:
        "Leading a team of 3 on Perihelion, a rocket-engine simulation game coming to Steam.",
    },
    {
      title: "BFA, Digital Game Development",
      org: "Long Island University",
      when: "2023 – 2027",
      detail: "GPA ~3.9. Full-ride scholarship.",
    },
  ],

  // Smaller games shown in the "More games" section, linked to itch.io.
  // The section is hidden while this list is empty.
  // thumb is optional: drop an image in public/media/ and use "/media/file.png".
  itchGames: [
    // Covers load from itch's image server. To swap one, save it into public/media/ and use "/media/file.png".
    {
      title: "Lil Buddy",
      url: "https://pyjamapants.itch.io/lil-buddy",
      blurb: "Play as a computer virus spreading through someone's PC. Pirate Software Game Jam 16 entry, where I was the programmer.",
      tags: ["Unity", "Game jam", "Puzzle", "Browser"],
      thumb: "https://img.itch.zone/aW1nLzE5NjI1MDYyLnBuZw==/original/eyq%2BNm.png",
    },
    {
      title: "RoboZoo",
      url: "https://sphynxg101.itch.io/robozoo",
      blurb: "Build mismatched robotic animals and watch them come to life. Programmer on a five-person team.",
      tags: ["Simulation", "Team of 5", "Windows"],
      thumb: "https://img.itch.zone/aW1nLzI2NTg3MzQyLnBuZw==/original/BeAhl3.png",
    },
    {
      title: "Earth Drifting",
      url: "https://crdgd.itch.io/earth-drifting",
      blurb: "A 2D pixel-art endless runner. Designer and programmer on a three-person team.",
      tags: ["Unity", "Platformer", "Browser"],
      thumb: "https://img.itch.zone/aW1nLzIxMDcyMTM1LnBuZw==/original/x%2F5AKg.png",
    },
    {
      title: "ROTopia",
      url: "https://zdesign.itch.io/rotopia",
      blurb: "Explore a world where you communicate only through dance. I was the artist on a four-person team.",
      tags: ["Art", "RPG", "Team of 4"],
      thumb: "https://img.itch.zone/aW1nLzI0Mzc5NTQ5LnBuZw==/original/QPpRjv.png",
    },
    {
      title: "The 7 Seas",
      url: "https://crdgd.itch.io/7seas",
      blurb: "A sailing adventure with stars to read and a hurdy-gurdy to play, made solo in about 12 hours.",
      tags: ["Unity", "Solo", "Browser"],
      thumb: "https://img.itch.zone/aW1nLzE4MTc2NDE4LnBuZw==/original/zG%2F0L8.png",
    },
    {
      title: "Apocamow",
      url: "https://crdgd.itch.io/apocamow",
      blurb: "You're the last man on Earth, and the lawn still needs mowing. Solo project.",
      tags: ["Unity", "Solo", "Simulation"],
      thumb: "https://img.itch.zone/aW1nLzE5MzU4NTY5LnBuZw==/original/SvGsqu.png",
    },
  ] as { title: string; url: string; blurb: string; tags?: string[]; thumb?: string }[],

  skills: [
    "Unity", "C#", "C++", "Photon Fusion", "Embedded / Arduino",
    "CI/CD (iOS & Android)", "WinForms", "SQL", "Docker", "Python", "Git",
  ],
};
