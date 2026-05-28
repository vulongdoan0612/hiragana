import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useSettingsStore = create(
  persist(
    (set) => ({
      darkMode: true,
      autoPlayAudio: true,
      showRomaji: true,
      showMnemonic: true,
      selectedGroups: ['basic'],
      quizMode: 'multiple_choice',
      cardFlipSound: true,
      confettiEnabled: true,
      fontSize: 'normal',

      toggle: (key) => set((state) => ({ [key]: !state[key] })),
      set: (key, value) => set(() => ({ [key]: value })),
      toggleGroup: (group) =>
        set((state) => {
          const groups = state.selectedGroups.includes(group)
            ? state.selectedGroups.filter((g) => g !== group)
            : [...state.selectedGroups, group];
          return { selectedGroups: groups.length ? groups : [group] };
        }),
    }),
    { name: 'hiragana-settings' }
  )
);
