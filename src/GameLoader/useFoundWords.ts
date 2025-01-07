import { useRecoilValue } from "recoil";
import { gameFoundWords } from "./recoil";
import { useRevealWords } from "../Hive/useRevealed";
import { useWords } from "./useWords";
import { neverGuard } from "../neverGuard";

export const useFoundWords = () => {
  const foundWords = useRecoilValue(gameFoundWords);
  const { reveals } = useRevealWords();
  const { words } = useWords();

  const revealedWords = words
    .filter((word) => !foundWords[word])
    .filter((word) => {
      return reveals.some((hint) => {
        const which = hint.which;
        switch (which) {
          case "all": {
            return true;
          }
          case "letter": {
            return word[0] === hint.letter;
          }
          case "length": {
            return word.length === hint.length;
          }
          case "letter-length": {
            return word[0] === hint.letter && word.length === hint.length;
          }
          default: {
            return neverGuard(which, false);
          }
        }
      });
    });

  return {
    found: foundWords,
    revealedWords,
  };
};
