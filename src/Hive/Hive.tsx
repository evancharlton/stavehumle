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

export type BadGuess =
  | 'too-short'
  | 'missing-center'
  | 'already-found'
  | 'unknown-word'
  | 'invalid-letters';

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
        setBadGuess('invalid-letters');
        return;
      }

      if (word.length < 4) {
        setBadGuess('too-short');
        return;
      }

      if (!word.includes(centerLetter)) {
        setBadGuess('missing-center');
        return;
      }

      if (found.includes(word)) {
        setBadGuess('already-found');
        return;
      }

      if (!words.includes(word)) {
        setBadGuess('unknown-word');
        return;
      }

      addFoundWord(word);
    },
    [all, centerLetter, found, words, addFoundWord]
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
