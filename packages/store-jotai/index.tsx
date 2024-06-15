import { atom, useAtom } from "jotai";

const countAtom = atom(0);

export const useCountFromJotai = () => useAtom(countAtom);