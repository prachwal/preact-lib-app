import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type ThemeMode = 'light' | 'dark' | 'auto';

interface ThemeState {
  mode: ThemeMode;
  setTheme: (mode: ThemeMode) => void;
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      mode: 'auto',
      setTheme: (mode) => {
        set({ mode });
        applyTheme(mode);
      },
      toggleTheme: () =>
        set((state) => {
          const modes: ThemeMode[] = ['light', 'dark', 'auto'];
          const currentIndex = modes.indexOf(state.mode);
          const nextMode = modes[(currentIndex + 1) % modes.length];
          applyTheme(nextMode);
          return { mode: nextMode };
        }),
    }),
    {
      name: 'theme-storage',
    }
  )
);

function applyTheme(mode: ThemeMode) {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return;
  }
  
  const root = document.documentElement;
  
  if (mode === 'auto') {
    // Check if matchMedia is available (not in all test environments)
    if (window.matchMedia) {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      root.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
    } else {
      root.setAttribute('data-theme', 'light');
    }
  } else {
    root.setAttribute('data-theme', mode);
  }
}

// Apply theme on initial load
if (typeof window !== 'undefined') {
  const store = useThemeStore.getState();
  applyTheme(store.mode);
  
  // Listen for system theme changes when in auto mode (only if matchMedia is available)
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
      const currentMode = useThemeStore.getState().mode;
      if (currentMode === 'auto') {
        applyTheme('auto');
      }
    });
  }
}
