# 🎲 LiteBoard

> **A lightweight, offline-first collection of classic board and card games built for desktop.**

![Tauri](https://img.shields.io/badge/Tauri-2.0-FEC006?style=for-the-badge&logo=tauri&logoColor=white)
![Vue.js](https://img.shields.io/badge/Vue.js-3.0-4FC08D?style=for-the-badge&logo=vuedotjs&logoColor=white)
![Pinia](https://img.shields.io/badge/Pinia-State_Management-FFD11B?style=for-the-badge&logo=pinia&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-Logic-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

## 📖 About The Project

**LiteBoard** is a desktop application that bundles various classic strategy and card games into a single, resource-efficient executable.

Built using **Tauri** and **Vue 3**, this application is designed to be significantly lighter than traditional Electron-based apps. It focuses on logic, strategy, and casual play without any gambling mechanics. The goal is to preserve the heritage of traditional games like Shogi, Mahjong, and Gaple in a modern, ad-free, and offline environment.

### ✨ Key Features

* **⚡ Ultra Lightweight:** Powered by Tauri (Rust), consuming minimal RAM compared to typical web-based desktop apps.
* **🔌 100% Offline:** No internet connection required. Logic and assets are bundled locally.
* **💾 Local Persistence:** Uses the native file system to save game progress and high scores securely.
* **🧩 State Management:** Complex game rules handled efficiently using Pinia stores.
* **👥 Hotseat Multiplayer:** Play with friends on a single device with "Pass-and-Play" mode (complete with privacy screens for card games).

## 🗺️ Development Roadmap

The games are categorized by technical complexity, ranging from basic logic implementation to advanced AI and physics engines.

### 🟢 Phase 1: Foundation (Basic Logic & Arrays)
*Focus: Establishing Project Structure, Pinia Stores, and Simple Validations.*
- [ ] **Blackjack:** Simple math logic (sum check > 21) without complex board movement.
- [ ] **Mancala (Congklak):** Deterministic array manipulation with circular logic.
- [ ] **Gaple (Dominoes):** Straightforward pattern matching (node A matches node B).

### 🔵 Phase 2: Grid Logic & Intermediate Rules
*Focus: 2D Arrays, Recursion, and Basic "Minimax" concepts.*
- [ ] **Snakes & Ladders:** 1D to 2D grid mapping (zigzag path), state jumping logic, and simple RNG dice mechanics.
- [ ] **Minesweeper:** Implementation of Flood Fill algorithms (Recursion) and grid state management.
- [ ] **Othello (Reversi):** Grid traversal logic (vertical/horizontal/diagonal checks) and tile flipping.
- [ ] **Checkers (Dama):** Diagonal movement restrictions and "forced capture" logic.
- [ ] **Ludo:** Path-based movement logic, collision handling (sending opponent home), and turn-based dice mechanics.

### 🟡 Phase 3: Advanced State & UI Interactions
*Focus: Complex Drag-and-Drop, Turn Management, and Trick-Taking Logic.*
- [ ] **Solitaire:** Complex CSS for Drag-and-Drop and strict stack validation rules.
- [ ] **Uno:** Dynamic turn management (Reverse, Skip) and special action handling.
- [ ] **Hearts / Spades:** Trick-taking mechanics requiring basic bot intelligence for card selection.

### 🟠 Phase 4: Algorithm Heavy
*Focus: Generators, Hand Evaluators, and Complex Scoring.*
- [ ] **Sudoku:** Requires Backtracking algorithms for valid puzzle generation and unique solution verification.
- [ ] **Capsa Susun / Poker (Texas Hold'em):** Complex hand evaluation algorithms (detecting Royal Flush, Straights, etc.).
- [ ] **Remi (Rummy):** Set collection and run validation logic.
- [ ] **Hanafuda (Koi-Koi):** Highly specific scoring system (Yaku) and pattern combinations.

### 🔴 Phase 5: Grand Strategy (The Bosses)
*Focus: Deep AI (Minimax/Alpha-Beta Pruning) and Massive Rule Sets.*
- [ ] **Chess:** Complex movement rules (Castling, En Passant) and AI integration.
- [ ] **Shogi (Japanese Chess):** Includes "Drop" mechanics (reusing captured pieces), increasing AI complexity.
- [ ] **Go (Weiqi):** Territory calculation algorithms and "Life and Death" group status.
- [ ] **Mahjong:** Extremely complex rule sets (Riichi, Pon, Chi, Kan, Furiten) and edge-case handling.

### 🟣 Experimental: Physics Based
*Focus: Canvas API & Physics Engines (Matter.js/Box2D).*
*Note: These require stepping outside standard Vue DOM manipulation.*
- [ ] **Carrom (Karambol)**
- [ ] **Billiards**

## 🛠️ Tech Stack

* **Core:** [Tauri](https://tauri.app/) (Rust + Webview)
* **Frontend:** [Vue.js 3](https://vuejs.org/) (Composition API)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/) (Utility-first framework)
* **State Management:** [Pinia](https://pinia.vuejs.org/)
* **Language:** TypeScript (Strict typing for game logic)
* **Storage:** Native File System API via Tauri

## 📂 Project Structure

```
src/
├── assets/                  # 🎨 Aset Global (Logo, Font, Global CSS)
│   ├── audio/               # (sfx-click.mp3, bgm-lobby.mp3)
│   └── images/              # (background-wood.jpg, logo.png)
│
├── common/                  # 🛠️ Shared Code (Bisa dipake semua game)
│   ├── components/          # "LEGO"-nya UI (Atomic Components)
│   │   ├── BaseButton.vue   # Tombol style Tailwind standar
│   │   ├── BaseCard.vue     # Kotak kartu kosong (frame)
│   │   ├── ModalDialog.vue  # Pop-up (Pause/Game Over)
│   │   └── GameLayout.vue   # Layout dasar (ada tombol back, score)
│   │
│   └── utils/               # Fungsi bantu (Helper)
│       ├── tauriStorage.ts  # Wrapper save/load file ke laptop
│       ├── soundManager.ts  # Logic play audio
│       └── randomizer.ts    # Logic ngocok dadu/kartu
│
├── games/                   # 📦 MODUL GAME (Rumah masing-masing game)
│   │                        # Kalo mau hapus game, hapus 1 folder ini aja.
│   ├── blackjack/           
│   │   ├── components/      # UI khusus Blackjack (ChipButton, DealerHand)
│   │   ├── logic/           # 🧠 OTAKNYA (Pure TypeScript, No Vue!)
│   │   │   ├── deck.ts      # Logic bikin 52 kartu
│   │   │   ├── scoring.ts   # Logic hitung nilai (As = 1/11)
│   │   │   └── types.ts     # TypeScript Interfaces
│   │   ├── store.ts         # 🏪 PINIA (Jembatan Logic ke UI)
│   │   └── BlackjackView.vue # Tampilan utama game
│   │
│   ├── gaple/
│   │   ├── components/      # UI khusus Gaple (DominoTile)
│   │   ├── logic/           # Pure TS (Rules, Valid Move)
│   │   ├── store.ts         # Pinia Gaple
│   │   └── GapleView.vue    # Tampilan utama game
│   │
│   └── ... (game lainnya)
│
├── router/                  # 🚦 Pengatur Lalu Lintas URL
│   └── index.ts             # (Home -> /game/gaple, dll)
│
├── stores/                  # 🌍 Global Store (Bukan game logic)
│   └── appStore.ts          # Simpan settingan (Volume, Nama User, Theme)
│
├── views/                   # 🏠 Halaman Umum
│   ├── HomeView.vue         # Menu Utama (Daftar Game)
│   └── SettingsView.vue     # Halaman Pengaturan
│
├── App.vue                  # Root
└── main.ts                  # Entry Point
```

## 🚀 Getting Started

### Prerequisites
Ensure you have the following installed:
* Node.js & npm/pnpm
* Rust & Cargo (for Tauri)

### Installation

1.  Clone the repo:
    ```sh
    git clone [https://github.com/username/liteboard.git](https://github.com/username/liteboard.git)
    ```
2.  Install dependencies:
    ```sh
    npm install
    ```
3.  Run in development mode:
    ```sh
    npm run tauri dev
    ```
4.  Build for production:
    ```sh
    npm run tauri build
    ```

## 🤝 Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions to add new games or improve the AI are **greatly appreciated**.

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.
