import { useMemo } from 'react';

export const useScore = (words: string[]) => {
  const score = useMemo(() => {
    return words
      .map((word) => {
        if (word.length === 4) {
          return 1;
        }

        if (word.length < 7) {
          return word.length;
        }

        const letters = new Set(word.split(''));
        return (letters.size === 7 ? 7 : 0) + word.length;
      })
      .reduce((total, score) => total + score, 0);
  }, [words]);

  return { score };
};
