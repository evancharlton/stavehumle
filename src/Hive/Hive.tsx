import { createContext, useCallback, useState } from 'react';
import { useLetters } from '../LettersProvider';
import { useWords } from '../WordProvider';
import Score from './Score';
import Found from './Found';
import Buttons from './Buttons';
import Progress from './Progress';
import classes from './Hive.module.css';

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

  const [found, setFound] = useState<string[]>([]);

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
        setFound((list) => [...list, word].sort());
      }
    },
    [all, centerLetter, found, words]
  );

  return (
    <Context.Provider value={{ found, onGuess: makeGuess }}>
      <div className={classes.container}>
        <Buttons />
        <div className={classes.column}>
          <Progress />
          <Score />
          <Found />
        </div>
      </div>
    </Context.Provider>
  );
};

export default Hive;
