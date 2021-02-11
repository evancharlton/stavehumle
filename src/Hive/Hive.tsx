import { createContext, useCallback } from 'react';
import { useLetters } from '../LettersProvider';
import { useWords } from '../WordProvider';
import WordList from './WordList';
import Buttons from './Buttons';
import Progress from './Progress';
import Header from './Header';
import Messages from './Messages';
import Grid from './Grid';
import classes from './Hive.module.css';
import { useFoundWords } from './useFoundWords';
import isPangram from '../isPangram';

export type BadGuess =
  | 'too-short'
  | 'missing-center'
  | 'already-found'
  | 'unknown-word'
  | 'invalid-letters';

type ContextType = {
  found: string[];
  onGuess: (guess: string) => void;
};

export const Context = createContext<ContextType>({
  found: [],
  onGuess: () => undefined,
});

const Hive = () => {
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
        dispatchEvent(
          new CustomEvent('bad-guess', { detail: 'invalid-letters' })
        );
        return;
      }

      if (word.length < 4) {
        dispatchEvent(new CustomEvent('bad-guess', { detail: 'too-short' }));
        return;
      }

      if (!word.includes(centerLetter)) {
        dispatchEvent(
          new CustomEvent('bad-guess', { detail: 'missing-center' })
        );
        return;
      }

      if (found.includes(word)) {
        dispatchEvent(
          new CustomEvent('bad-guess', { detail: 'already-found' })
        );
        return;
      }

      if (!words.includes(word)) {
        dispatchEvent(new CustomEvent('bad-guess', { detail: 'unknown-word' }));
        return;
      }

      addFoundWord(word);
      if (isPangram(word)) {
        dispatchEvent(new CustomEvent('pangram'));
      }
    },
    [all, centerLetter, found, words, addFoundWord]
  );

  return (
    <Context.Provider value={{ found, onGuess: makeGuess }}>
      <div className={classes.container}>
        <Header />
        <div className={classes.gameContainer}>
          <div className={classes.buttonsContainer}>
            <Messages />
            <Buttons />
          </div>
          <div className={classes.column}>
            <div className={classes.header}>
              <Progress />
            </div>
            <WordList />
            <div className={classes.footer}>
              <Grid />
            </div>
          </div>
        </div>
      </div>
    </Context.Provider>
  );
};

export default Hive;
