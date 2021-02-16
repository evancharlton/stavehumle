import { useContext, useMemo } from 'react';
import scoreWord from 'score';
import { Context } from './Hive';

export const useScore = (words: string[]) => {
  const score = useMemo(() => {
    return words
      .map((word) => scoreWord(word))
      .reduce((total, wordScore) => total + wordScore, 0);
  }, [words]);

  return { score };
};

export const useGame = () => {
  return useContext(Context);
};
