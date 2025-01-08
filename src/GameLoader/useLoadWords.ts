import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { jsonFetch } from "../api";
import { gameWords } from "./recoil";
import { useLetters } from "./useLetters";
import { useParams } from "react-router";

export const useLoadWords = () => {
  const { lang } = useParams();
  const { all, centerLetter } = useLetters();

  const setWords = useSetRecoilState(gameWords);
  const [error, setError] = useState<Error | undefined>();

  useEffect(() => {
    if (!all) {
      return;
    }

    const letters = new Set(all.split(""));

    jsonFetch(`https://lister.evanc.no/stavehumle/words/${lang}/words.json`)
      .then((loadedWords) => {
        return loadedWords.filter((word: string) => {
          let hasCenter = false;
          for (let i = 0; i < word.length; i += 1) {
            if (!letters.has(word[i])) {
              return false;
            }

            hasCenter = hasCenter || word[i] === centerLetter;
          }
          return hasCenter;
        });
      })
      .then((words) => {
        setWords(words);
      })
      .catch(setError);

    return () => {
      setWords([]);
    };
  }, [all, centerLetter, lang, setWords]);

  return { error };
};
