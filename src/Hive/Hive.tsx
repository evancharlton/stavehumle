import { createContext, useCallback, useState } from 'react';
import { useLetters } from '../LettersProvider';
import { useWords } from '../WordProvider';
import Found from './Found';
import Buttons from './Buttons';
import Progress from './Progress';
import Header from './Header';
import ErrorDisplay from './ErrorDisplay';
import Grid from './Grid';
import classes from './Hive.module.css';
import { useFoundWords } from './useFoundWords';

export type BadGuess = {
  reason:
    | 'too-short'
    | 'missing-center'
    | 'already-found'
    | 'unknown-word'
    | 'invalid-letters';
  etag: string | number;
};

type ContextType = {
  found: string[];
  onGuess: (guess: string) => void;
  badGuess: BadGuess | undefined;
};

export const Context = createContext<ContextType>({
  found: [],
  onGuess: () => undefined,
  badGuess: undefined,
});

const Hive = () => {
  const [badGuess, setBadGuess] = useState<BadGuess>();
  const { all, centerLetter } = useLetters();
  const { words } = useWords();

  const { found, addFoundWord } = useFoundWords();

  const recordBadGuess = useCallback(
    (reason: BadGuess['reason'] | undefined) => {
      if (!reason) {
        setBadGuess(undefined);
        return;
      }

      setBadGuess({ reason, etag: Date.now() });
    },
    [setBadGuess]
  );

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
        recordBadGuess('invalid-letters');
        return;
      }

      if (word.length < 4) {
        recordBadGuess('too-short');
        return;
      }

      if (!word.includes(centerLetter)) {
        recordBadGuess('missing-center');
        return;
      }

      if (found.includes(word)) {
        recordBadGuess('already-found');
        return;
      }

      if (!words.includes(word)) {
        recordBadGuess('unknown-word');
        return;
      }

      addFoundWord(word);
      recordBadGuess(undefined);
    },
    [all, centerLetter, found, words, addFoundWord, recordBadGuess]
  );

  return (
    <Context.Provider value={{ found, onGuess: makeGuess, badGuess }}>
      <div className={classes.container}>
        <Header />
        <div className={classes.gameContainer}>
          <div className={classes.buttonsContainer}>
            <ErrorDisplay />
            <Buttons />
          </div>
          <div className={classes.column}>
            <Progress />
            <Found />
            <Grid />
          </div>
        </div>
      </div>
    </Context.Provider>
  );
};

export default Hive;
