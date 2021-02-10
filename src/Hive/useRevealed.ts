import { useLetters } from 'LettersProvider';

import { useCallback, useEffect, useState } from 'react';

export const useRevealed = () => {
  const { centerLetter, outerLetters } = useLetters();
  const key = [
    'nb-no', // Multi-lingual .. some day
    'revealed',
    [centerLetter, ...outerLetters].join(''),
  ].join('/');

  const [revealed, setLocalRevealed] = useState(false);

  useEffect(() => {
    const when = localStorage.getItem(key);
    setLocalRevealed(!!when);
  }, [key, setLocalRevealed]);

  const revealAnswers = useCallback(() => {
    localStorage.setItem(key, new Date().toISOString());
    window.dispatchEvent(new CustomEvent('revealed', { detail: key }));
  }, [key]);

  const onRevealed = useCallback(
    (e: Event) => {
      const { detail } = e as CustomEvent<string>;
      if (detail !== key) {
        return;
      }
      setLocalRevealed(true);
    },
    [key, setLocalRevealed]
  );

  useEffect(() => {
    window.addEventListener('revealed', onRevealed);
    return () => {
      window.removeEventListener('revealed', onRevealed);
    };
  }, [onRevealed]);

  return { revealed, revealAnswers };
};
