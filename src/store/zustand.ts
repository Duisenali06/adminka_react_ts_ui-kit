import { create } from "zustand";

interface Count {
  value: number;
  increment: () => void;
  decrement: () => void;
}

export const Countable = create<Count>()((set) => ({
  value: 0,
  increment: () => set((state) => ({ value: state.value + 1 })),
  decrement: () => set((state) => ({ value: state.value - 1 }))
}));

export const useCountable = Countable;
