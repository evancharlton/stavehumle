import { useLetters } from '../GameLoader';
import { useCallback, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { wordReveals } from '../GameLoader/recoil';
import { RevealOption, StoredRevealOptions } from '../GameLoader/types';
import { usePuzzlePath } from '../GameLoader/usePuzzlePath';
import { useParams } from 'react-router';

export const useRevealed = () => {
  const { lang } = useParams();
  const { centerLetter, outerLetters } = useLetters();
  const key = [
    'stavehumle',
    lang,
    'revealed',
    [centerLetter, ...outerLetters].join(''),
  ].join('/');

  const [reveals, setReveals] = useState<StoredRevealOptions>([]);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(reveals));
  }, [key, reveals]);

  const revealAnswers = useCallback((option: RevealOption) => {
    if (!option) {
      // No un-reveal allowed!
      return;
    }

    setReveals((reveals) => [
      ...reveals,
      { ...option, when: new Date().toISOString() },
    ]);
  }, []);

  return { reveals, revealAnswers };
};

export const useRevealWords = () => {
  const key = usePuzzlePath('revealed');
  const [reveals, setReveals] = useRecoilState(wordReveals);

  useEffect(() => {
    const value = localStorage.getItem(key);
    if (!value) {
      setReveals([]);
      return;
    }

    try {
      const parsed = JSON.parse(value);
      if (!Array.isArray(parsed)) {
        return;
      }

      setReveals(parsed);
    } catch (ex) {
      console.error(ex);
    }
  }, [key, setReveals]);

  return {
    reveals,
    revealAnswers: useCallback(
      (option: RevealOption) => {
        setReveals((reveals) => {
          const next = [
            ...reveals,
            { ...option, when: new Date().toISOString() },
          ];

          localStorage.setItem(key, JSON.stringify(next));
          return next;
        });
      },
      [key, setReveals],
    ),
  };
};
