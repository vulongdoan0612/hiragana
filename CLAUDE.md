# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (Vite HMR)
npm run build     # Production build
npm run preview   # Preview production build
npm run lint      # Run ESLint
```

There are no tests in this project.

## Architecture

**Stack:** React 19, Vite, Tailwind CSS, Zustand (with `persist`), Framer Motion, React Router v7.

**Routing:** `App.jsx` defines a single `<Layout>` shell wrapping five pages: `Home`, `Learn`, `Quiz`, `Game`, `Progress`, `Settings`. The layout renders a `Navbar` (desktop) and `BottomNav` (mobile).

**Data layer (`src/data/hiragana.js`):** Static array of all hiragana cards. Each card has `{ id, kana, romaji, group, row, mnemonic, emoji, illustration, examples[] }`. Cards are grouped by `GROUPS` enum: `basic`, `dakuten`, `handakuten`, `yoon`. This is the single source of truth — no API calls.

**State management (`src/store/`):**
- `useProgressStore` — tracks per-card stats (`learnedCards` map keyed by card `id`), XP/level, streak, daily progress, session stats, and achievements. Persisted to `localStorage` as `hiragana-progress`.
- `useSettingsStore` — user preferences (dark mode, audio, romaji visibility, selected groups, quiz mode, font size). Persisted as `hiragana-settings`.

**Audio (`src/hooks/useAudio.js`):** Two hooks — `useSpeech` uses Web Speech API (`ja-JP`) for kana pronunciation; `useSound` generates tones via Web Audio API for UI feedback (correct/wrong/flip/success). Both respect their respective settings store flags.

**Spaced repetition (`src/utils/spaced-repetition.js`):** Lightweight helpers — `sortByDifficulty` prioritizes cards with high difficulty scores and older `lastSeen`; `getQuizChoices` builds multiple-choice answer sets; `shuffle` randomizes arrays.

**Difficulty scoring:** `markCorrect` decrements difficulty (min 0), `markWrong` increments by 2 (max 5). XP is +10 per correct answer; level = `floor(totalXP / 200) + 1`.

**UI components (`src/components/`):** Reusable `Button`, `Badge`, `ProgressBar`, `StatCard`, `Confetti` in `ui/`; `FlashCard` in `flashcard/`; `AchievementCard` in `progress/`. Styling uses Tailwind with `clsx`/`tailwind-merge` for conditional classes.

## Key conventions

- Vietnamese mnemonics and UI labels — this app targets Vietnamese learners.
- Dark-first UI (`darkMode: true` default); uses `bg-white/5`, `text-white/40` opacity utilities extensively.
- Framer Motion `AnimatePresence` + `motion.div` used for all card transitions and filter panels.
- No TypeScript — plain JSX throughout.
