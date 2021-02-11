import { useLetters } from 'LettersProvider';
import { useCallback, useState } from 'react';

const getSavedWords = (key: string) => {
  try {
    const item = localStorage.getItem(key);
    if (item) {
      const saved = JSON.parse(item);
      if (Array.isArray(saved)) {
        return saved.filter((word) => typeof word === 'string');
      }
    }
  } catch (ex) {
    // Do nothing
  }
  return [];
};

export const useFoundWords = () => {
  const { centerLetter, outerLetters } = useLetters();

  const key = [
    'nb-no', // Just preparing for a multi-lingual setup
    'saved',
    [centerLetter, ...outerLetters].join(''),
  ].join('/');

  const [found, setStateFound] = useState<string[]>(() => getSavedWords(key));

  const addFoundWord = useCallback(
    (newWord) => {
      setStateFound((existing) => {
        const newWords = [...existing, newWord].sort();
        localStorage.setItem(key, JSON.stringify(newWords));
        return newWords;
      });
    },
    [setStateFound, key]
  );

  return {
    found,
    addFoundWord,
    foundSet: new Set(found),
  };
};
