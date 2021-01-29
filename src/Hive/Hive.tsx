import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useLetters } from '../LettersProvider';
import { useWords } from '../WordProvider';
import Score from './Score';
import Found from './Found';

const Hive = () => {
  const { all, centerLetter, outerLetters } = useLetters();
  const { words } = useWords();
  const [guess, setGuess] = useState('');
  const guessRef = useRef<string>(guess);
  guessRef.current = guess;

  const [found, setFound] = useState<string[]>([]);

  const onClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      const button = event.currentTarget;
      const letter = button.getAttribute('data-letter');
      setGuess((g) => `${g}${letter}`);
    },
    [setGuess]
  );

  const makeGuess = useCallback(() => {
    const word = guessRef.current
      .split('')
      .filter((letter) => all.includes(letter))
      .join('');
    try {
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
    } finally {
      setGuess('');
    }
  }, [guessRef, setGuess]);

  const letterButtons = useMemo(() => {
    return [centerLetter, ...outerLetters].filter(Boolean).map((letter) => {
      return (
        <button data-letter={letter} onClick={onClick} key={letter}>
          {letter}
        </button>
      );
    });
  }, [centerLetter, outerLetters, onClick]);

  const onKeyPress = useCallback(
    (e: KeyboardEvent) => {
      const { key } = e;

      if (key === 'Backspace') {
        setGuess((g) => g.substring(0, g.length - 1));
        return;
      }

      if (key === 'Enter') {
        makeGuess();
      }

      if (!all.includes(key)) {
        return;
      }

      setGuess((g) => `${g}${key}`);
    },
    [makeGuess]
  );

  useEffect(() => {
    document.addEventListener('keydown', onKeyPress);
    return () => {
      document.removeEventListener('keydown', onKeyPress);
    };
  }, [onKeyPress]);

  return (
    <div>
      <div>{guess}</div>
      {letterButtons}
      <Score words={found} />
      <Found words={found} />
    </div>
  );
};

export default Hive;
