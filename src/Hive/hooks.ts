import { FoundWordEvent } from '../custom-events';
import { useFoundWords, useLetters, useWords } from '../GameLoader';
import { useCallback, useMemo } from 'react';
import scoreWord from '../score';

export const useScore = (words: string[]) => {
  const score = useMemo(() => {
    return words
      .map((word) => scoreWord(word))
      .reduce((total, wordScore) => total + wordScore, 0);
  }, [words]);

  return { score };
};

export const useGame = () => {
  const { found: foundWordsMap, revealedWords } = useFoundWords();
  const { all, centerLetter } = useLetters();
  const { words } = useWords();

  const makeGuess = useCallback(
    (input: string) => {
      if (!input) {
        // No error message for this.
        return;
      }

      const word = input
        .toLocaleLowerCase()
        .split('')
        .filter((letter) => all.includes(letter))
        .join('');

      if (word.length !== input.length) {
        dispatchEvent(
          new CustomEvent('bad-guess', { detail: 'invalid-letters' }),
        );
        return;
      }

      if (word.length < 4) {
        dispatchEvent(new CustomEvent('bad-guess', { detail: 'too-short' }));
        return;
      }

      if (!word.includes(centerLetter)) {
        dispatchEvent(
          new CustomEvent('bad-guess', { detail: 'missing-center' }),
        );
        return;
      }

      if (foundWordsMap[word]) {
        dispatchEvent(
          new CustomEvent('bad-guess', { detail: 'already-found' }),
        );
        return;
      }

      if (revealedWords.includes(word)) {
        dispatchEvent(new CustomEvent('bad-guess', { detail: 'revealed' }));
        return;
      }

      if (!words.includes(word)) {
        dispatchEvent(new CustomEvent('bad-guess', { detail: 'unknown-word' }));
        return;
      }

      dispatchEvent(new FoundWordEvent(word, new Date(), 'local'));
    },
    [all, centerLetter, foundWordsMap, revealedWords, words],
  );

  return {
    onGuess: makeGuess,
    found: Object.keys(foundWordsMap),
    revealedWords,
  };
};
