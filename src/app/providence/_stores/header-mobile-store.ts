import { create } from 'zustand';

interface HeaderMobileState {
  isOpen: boolean;
  toggle: () => void;
}

export const useHeaderMobileStore = create<HeaderMobileState>((set) => ({
  isOpen: false,
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
}));
