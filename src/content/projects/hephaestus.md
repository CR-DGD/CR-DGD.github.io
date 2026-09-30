---
title: Hephaestus Flight Computer
summary: A model-rocket flight computer in embedded C++. It fuses a barometer and two IMUs and logs flight telemetry.
role: Solo project
period: Dec 2025 – present
tags: [C++, Arduino, Python, Embedded, Sensor fusion, Telemetry]
order: 3
accent: "#7aa2ff"
media: /media/Hepheastus.mp4
links: []
---

## What it is

Hephaestus is a rocket with a flight computer I'm building on Arduino in embedded C++. It combines a BMP280 barometer with two MPU6050 IMUs to estimate the vehicle's state and streams telemetry in real time.

## What I worked on

- **Multi-sensor fusion.** Barometric altitude combined with dual-IMU motion data. Fusing both IMUs with a complementary filter totals out to much cleaner data, along with being able to get pitch and roll output.
- **Logged telemetry.** Everything is logged to an onboard SD card.
- **Multifaceted data.** Altitude, bay temperature, estimated airspeed, roll/pitch/yaw, and barometric pressure are all logged and output to the card.
- **Postflight analysis.** The output data can be run through a python GUI that displays charts and readouts for analysis and fault detection.

## Why it matters

Perihelion simulates engine data. Hephaestus creates flight data. Both total into a full system.
