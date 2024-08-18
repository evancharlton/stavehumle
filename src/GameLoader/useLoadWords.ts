import { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { gzipJsonFetch } from '../api';
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

    const key = all.substring(0, 3);
    const url = `${import.meta.env.BASE_URL}/words/${key}.json.gz`;
    gzipJsonFetch(url)
      .then((obj) => obj[all])
      .then((loadedWords) =>
        loadedWords.filter((word: string) => word.includes(centerLetter)),
      )
      .then(setWords)
      .catch(setError);

    return () => {
      setWords([]);
    };
  }, [all, centerLetter, setWords]);

  return { error };
};
