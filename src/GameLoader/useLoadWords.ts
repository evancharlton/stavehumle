import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { gameWords } from "./recoil";
import { useLetters } from "./useLetters";
import { useLanguageData } from "../spa-components/DataProvider";

export const useLoadWords = () => {
  const { all, centerLetter } = useLetters();
  const { data: loadedWords, error } =
    useLanguageData<string[]>("words/words.json");

  const setWords = useSetRecoilState(gameWords);

  useEffect(() => {
    if (!all || !loadedWords) {
      return;
    }

    const letters = new Set(all.split(""));

    setWords(
      loadedWords.filter((word: string) => {
        let hasCenter = false;
        for (let i = 0; i < word.length; i += 1) {
          if (!letters.has(word[i])) {
            return false;
          }

          hasCenter = hasCenter || word[i] === centerLetter;
        }
        return hasCenter;
      }),
    );

    return () => {
      setWords([]);
    };
  }, [all, centerLetter, loadedWords, setWords]);

  return { error };
};
