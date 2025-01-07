import { atom, selector } from "recoil";
import type { StoredRevealOptions, WordMap } from "./types";

export const gamePuzzleId = atom({
  key: "game/puzzleId",
  default: "",
});

export const gameLetters = selector({
  key: "game/letters",
  get: ({ get }) => {
    const puzzleId = get(gamePuzzleId);
    const [centerLetter, ...outerLetters] = puzzleId.split("");
    return {
      centerLetter,
      outerLetters,
      all: puzzleId.split("").sort().join(""),
    };
  },
});

export const gameWords = atom({
  key: "game/words",
  default: [] as string[],
});

export const gameFoundWords = atom({
  key: "game/words/found",
  default: {} as WordMap,
});

export const wordReveals = atom({
  key: "game/reveals",
  default: [] as StoredRevealOptions,
});
