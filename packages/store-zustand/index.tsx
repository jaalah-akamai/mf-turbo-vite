import { create } from "zustand";

type Store = {
  count: number;
  setCount: () => void;
};

export const useStoreFromZustand = create<Store>((set) => ({
  count: 0,
  setCount: () => set((state) => ({ count: state.count + 1 })),
}))
