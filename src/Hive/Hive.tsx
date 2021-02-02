import { createContext, useCallback, useState } from 'react';
import { useLetters } from '../LettersProvider';
import { useWords } from '../WordProvider';
import Score from './Score';
import Found from './Found';
import Buttons from './Buttons';
import Progress from './Progress';
import Header from './Header';
import classes from './Hive.module.css';
import { useFoundWords } from './useFoundWords';

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
      const word = input
        .toLocaleLowerCase()
        .split('')
        .filter((letter) => all.includes(letter))
        .join('');
      if (word.length < 4) {
        return;
      }

      if (!word.includes(centerLetter)) {
        return;
      }

      if (found.includes(word)) {
        return;
      }

      if (words.includes(word)) {
        addFoundWord(word);
      }
    },
    [all, centerLetter, found, words]
  );

  return (
    <Context.Provider value={{ found, onGuess: makeGuess }}>
      <div className={classes.container}>
        <Header />
        <div className={classes.gameContainer}>
          <div className={classes.buttonsContainer}>
            <Buttons />
          </div>
          <div className={classes.column}>
            <Progress />
            <Score />
            <Found />
          </div>
        </div>
      </div>
    </Context.Provider>
  );
};

export default Hive;
