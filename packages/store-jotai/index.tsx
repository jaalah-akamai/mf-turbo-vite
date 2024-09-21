import { atom, useAtom } from "jotai";

const countAtom = atom(0);
const errorBoundaryEnabledAtom = atom(false);
// Optional: Create a derived atom with a setter for more complex state updates
const errorBoundaryAtom = atom(
  (get) => get(errorBoundaryEnabledAtom),
  (_, set, newValue: boolean) => {
    set(errorBoundaryEnabledAtom, newValue);
    console.log('Error boundary state changed:', newValue);
    // You can add any additional side effects here
  }
);

export const useCountFromJotai = () => useAtom(countAtom);
// export const useErrorBoundaryEnabledFromJotai = () => useAtom(errorBoundaryEnabledAtom);
export const useErrorBoundaryEnabledFromJotai = () => useAtom(errorBoundaryAtom);