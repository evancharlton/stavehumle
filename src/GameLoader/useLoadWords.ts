import { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { jsonFetch } from '../api';
import { gameWords } from './recoil';
import { useLetters } from './useLetters';

export const useLoadWords = () => {
  const { all, centerLetter } = useLetters();

  const setWords = useSetRecoilState(gameWords);
  const [error, setError] = useState<Error | undefined>();

  useEffect(() => {
    if (!all) {
      return;
    }

    const letters = new Set(all.split(''));

    jsonFetch(`${import.meta.env.BASE_URL}/words/nb/words.json`)
      .then((loadedWords) => {
        return loadedWords.filter((word: string) => {
          for (let i = 0; i < word.length; i += 1) {
            if (!letters.has(word[i])) {
              return false;
            }
          }
          return true;
        });
      })
      .then((words) => {
        setWords(words);
      })
      .catch(setError);

    return () => {
      setWords([]);
    };
  }, [all, centerLetter, setWords]);

  return { error };
};