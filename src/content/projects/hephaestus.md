---
title: Hephaestus Flight Computer
summary: A model-rocket flight computer in embedded C++. It fuses a barometer and two IMUs and logs 60 Hz telemetry to an SD card.
role: Solo project
period: Dec 2025 – present
tags: [C++, Arduino, Python, Embedded, Sensor fusion, Telemetry]
order: 3
accent: "#7aa2ff"
media: /media/hephaestus.mp4
poster: /media/hephaestus.jpg
links: []
---

## What it is

Hephaestus is a rocket with a flight computer I'm building on Arduino in embedded C++. It combines a BMP280 barometer with two MPU6050 IMUs to estimate the vehicle's state, and logs telemetry to an onboard SD card.

## What I worked on

- **Multi-sensor fusion.** Barometric altitude combined with dual-IMU motion data. Fusing both IMUs with a complementary filter totals out to much cleaner data, along with being able to get pitch and roll output. I tuned the filter's blend constant to keep gyro drift in check.
- **Logged telemetry.** Everything is logged to an onboard SD card at 60 Hz. Each row is about 146 bytes, so a 4 GB card holds about 125 hours.
- **Multifaceted data.** Altitude, bay temperature, estimated airspeed, roll/pitch/yaw, and barometric pressure are all logged and output to the card.
- **Postflight analysis.** The output data can be run through a python GUI that displays charts and readouts for analysis and fault detection.

## Bench results

The rocket hasn't flown yet, so these are measured at rest on the bench. Pitch and roll drift about 0.15°/min, and gyro-only yaw drifts 0.14–0.37°/min across 2 stationary runs.

Next up: the host rocket is designed in OpenRocket, and a static fire will test the motor mount and ejection before first flight.

## Why it matters

Perihelion simulates engine data. Hephaestus creates flight data. Both total into a full system.
