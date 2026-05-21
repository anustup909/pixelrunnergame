# 🎮 Pixel Runner: Deluxe Edition

[![Platform: PWA](https://img.shields.io/badge/Platform-PWA%20%2F%20Mobile-brightgreen?style=for-the-badge&logo=progressive-web-apps)](https://anustup909.github.io/pixelrunnergame/)
[![Tech: HTML5 Canvas](https://img.shields.io/badge/Tech-HTML5%20Canvas-orange?style=for-the-badge&logo=html5)](https://anustup909.github.io/pixelrunnergame/)
[![Audio: Web Audio API](https://img.shields.io/badge/Audio-Web%20Audio%20API-blue?style=for-the-badge&logo=web-audio-api)](https://anustup909.github.io/pixelrunnergame/)
[![Licence: Copyrighted](https://img.shields.io/badge/Licence-Copyrighted-red?style=for-the-badge)](https://www.instagram.com/rivu.2026)

Pixel Runner: Deluxe Edition is a premium, feature-rich HTML5 Canvas infinite runner designed for web, mobile PWAs, and Discord Activity frames. It features custom **3D voxel sprite stacking**, real-time **procedural chiptune sound synthesis**, dynamic environmental cycles, and unique character playstyles.

🚀 **[Play Live Demo Here!](https://anustup909.github.io/pixelrunnergame/)**

---

## ✨ Key Features

### 🧊 1. 3D Voxel Sprite Stacking
Instead of standard flat 2D sprite rendering, Pixel Runner features a custom **sprite stacking** system. Flat 2D coordinate matrices are layered repeatedly along a depth vector with procedural shading to extrude characters and obstacles into blocky 3D models.
*   **0% Runtime GPU Overhead**: All 3D meshes are pre-rendered into offscreen canvases at boot time or on screen resize, keeping frame rates locked at **60 FPS** on lower-end mobile devices and iframes.
*   **Volumetric Shading**: Deeper layers are automatically darkened using a procedural color brightness calculator to create dynamic side-shading.

### 🎵 2. Procedural Web Audio Synth Engine
Zero external assets! All sound effects and background chiptunes are generated procedurally in real-time using the browser's native **Web Audio API**:
*   **Dynamic SFX**: Interactive synthesis for jumps (exponential pitch sweep), slides (downward arpeggios), collectibles, power-up activation, and crashes (highpass filter white-noise explosions).
*   **Step-Sequenced BGM**: A looping chiptune soundtrack containing a pulse-wave bassline and a triangle-wave lead melody that can be muted on the fly.

### 🌅 3. Day/Night Parallax Cycle
*   **Smooth Lighting Transitions**: The background sky, mountains, and ground terrain seamlessly morph color through Day, Sunset, Night, and Sunrise phases as you progress.
*   **Sparkling Star Field**: Twinkling background stars fade in and out depending on the time of day.
*   **4-Layer Parallax Scrolling**: Multi-velocity background assets (clouds, mountains, rolling hills, grass trim) create a deep, immersive sense of speed.

### 🐰 4. Unique Character Classes & Stats
Choose from 4 distinct runners, each featuring specialized stats and abilities:

| Character | Special Ability | Max Hearts | Speed | Jump Force | Gravity |
| :--- | :--- | :---: | :---: | :---: | :---: |
| **Bunny** | Double Jump | ❤️ | Normal | High | Normal |
| **Fox** | Super Sprint | ❤️ | Very Fast | Low | Normal |
| **Cat** | Floaty Glide & Hover | ❤️ | Fast | Normal | Low (Floaty) |
| **Bear** | Shield Heart (2 Lives) | ❤️❤️ | Normal | Very High | Heavy (Fast Fall) |

---

## 🕹️ Controls

| Action | 💻 Desktop Controls | 📱 Mobile Touch Controls |
| :--- | :--- | :--- |
| **Jump / Double Jump** | `Spacebar` or `Arrow Up` | Tap Left side of screen |
| **Short Hop** | Release key early | Tap quickly |
| **Duck / Slide / Fast Fall** | Hold `Arrow Down` | Hold Right side of screen |
| **Float / Glide** | Hold `Space` (Cat only) | Hold Left touch (Cat only) |

---

## 📂 Project Structure

*   `index.html` - The HTML5 semantic page structure featuring the custom glassmorphism overlays, character card dashboards, settings panel, and high score board.
*   `style.css` - UI layout and presentation utilizing frosted glass filters (`backdrop-filter`), glowing neon dropshadows, and responsive animations.
*   `game.js` - Main game engine. Includes sprite matrices, procedural 3D stacking algorithms, physics engines, particles, sound synthesizers, and game loops.
*   `sw.js` & `manifest.json` - PWA assets enabling offline playability and mobile home-screen installation.
*   `PixelRunner.apk` - The compiled and signed Android package ready for direct installation on mobile.

---

## 📦 Android Build & Auto-Signing
The repository features an automated CI/CD pipeline using **GitHub Actions** (`.github/workflows/sign-apk.yml`):
1.  Upload a new `PixelRunner-unsigned.apk` (built via Bubblewrap / CLI).
2.  The workflow automatically spins up a runner, signs the package with a secure production keystore via `apksigner`, and publishes the final `PixelRunner.apk`.
3.  The unsigned file is cleanly removed to maintain repository hygiene.

---

## 📄 License & Watermark

This project is copyrighted. Contact the author before utilizing or copying code snippets.
*   **Instagram Portfolio**: [@rivu.2026](https://www.instagram.com/rivu.2026)
