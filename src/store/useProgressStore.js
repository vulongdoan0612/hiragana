import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const DAILY_GOAL = 10;

export const useProgressStore = create(
  persist(
    (set, get) => ({
      learnedCards: {},      // { id: { seen, correct, wrong, lastSeen, difficulty } }
      streak: 0,
      lastStudyDate: null,
      totalXP: 0,
      level: 1,
      dailyProgress: 0,
      dailyGoal: DAILY_GOAL,
      achievements: [],
      sessionStats: { correct: 0, wrong: 0, startTime: null },

      markSeen: (id) => set((state) => {
        const existing = state.learnedCards[id] || { seen: 0, correct: 0, wrong: 0, difficulty: 0 };
        return {
          learnedCards: {
            ...state.learnedCards,
            [id]: { ...existing, seen: existing.seen + 1, lastSeen: Date.now() },
          },
        };
      }),

      markCorrect: (id) => set((state) => {
        const existing = state.learnedCards[id] || { seen: 0, correct: 0, wrong: 0, difficulty: 0 };
        const newCorrect = (existing.correct || 0) + 1;
        const newDifficulty = Math.max(0, (existing.difficulty || 0) - 1);
        const newXP = state.totalXP + 10;
        const newLevel = Math.floor(newXP / 200) + 1;
        const newDaily = Math.min(state.dailyProgress + 1, state.dailyGoal * 2);
        return {
          learnedCards: {
            ...state.learnedCards,
            [id]: { ...existing, correct: newCorrect, difficulty: newDifficulty, lastSeen: Date.now() },
          },
          totalXP: newXP,
          level: newLevel,
          dailyProgress: newDaily,
          sessionStats: {
            ...state.sessionStats,
            correct: state.sessionStats.correct + 1,
          },
        };
      }),

      markWrong: (id) => set((state) => {
        const existing = state.learnedCards[id] || { seen: 0, correct: 0, wrong: 0, difficulty: 0 };
        return {
          learnedCards: {
            ...state.learnedCards,
            [id]: {
              ...existing,
              wrong: (existing.wrong || 0) + 1,
              difficulty: Math.min(5, (existing.difficulty || 0) + 2),
              lastSeen: Date.now(),
            },
          },
          sessionStats: {
            ...state.sessionStats,
            wrong: state.sessionStats.wrong + 1,
          },
        };
      }),

      updateStreak: () => set((state) => {
        const today = new Date().toDateString();
        const last = state.lastStudyDate;
        if (last === today) return {};
        const yesterday = new Date(Date.now() - 86400000).toDateString();
        const newStreak = last === yesterday ? state.streak + 1 : 1;
        const newAchievements = [...state.achievements];
        if (newStreak === 3 && !newAchievements.includes('streak_3')) newAchievements.push('streak_3');
        if (newStreak === 7 && !newAchievements.includes('streak_7')) newAchievements.push('streak_7');
        if (newStreak === 30 && !newAchievements.includes('streak_30')) newAchievements.push('streak_30');
        return { streak: newStreak, lastStudyDate: today, achievements: newAchievements };
      }),

      unlockAchievement: (id) => set((state) => {
        if (state.achievements.includes(id)) return {};
        return { achievements: [...state.achievements, id] };
      }),

      startSession: () => set(() => ({
        sessionStats: { correct: 0, wrong: 0, startTime: Date.now() },
      })),

      resetDailyProgress: () => set(() => ({ dailyProgress: 0 })),

      getCardStats: (id) => {
        const card = get().learnedCards[id];
        if (!card) return { seen: 0, correct: 0, wrong: 0, difficulty: 0, accuracy: 0 };
        const total = (card.correct || 0) + (card.wrong || 0);
        return {
          ...card,
          accuracy: total ? Math.round(((card.correct || 0) / total) * 100) : 0,
        };
      },

      getDifficultCards: () => {
        const cards = get().learnedCards;
        return Object.entries(cards)
          .filter(([, v]) => (v.difficulty || 0) >= 2)
          .sort(([, a], [, b]) => (b.difficulty || 0) - (a.difficulty || 0))
          .map(([id]) => id);
      },

      getTotalLearned: () => Object.keys(get().learnedCards).length,
    }),
    { name: 'hiragana-progress' }
  )
);
