import { useCallback, useState } from 'react';
import { useLetters } from '../LettersProvider';
import { useWords } from '../WordProvider';
import Score from './Score';
import Found from './Found';
import Buttons from './Buttons';
import Progress from './Progress';

const Hive = () => {
  const { all, centerLetter } = useLetters();
  const { words } = useWords();

  const [found, setFound] = useState<string[]>([]);

  const makeGuess = useCallback((input: string) => {
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
  }, []);

  return (
    <div>
      <Buttons onGuess={makeGuess} />
      <Progress found={found} />
      <Score words={found} />
      <Found words={found} />
    </div>
  );
};

export default Hive;
