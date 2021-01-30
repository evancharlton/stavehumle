import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useLetters } from '../../LettersProvider';
import shuffle from '../../shuffle';

type Props = {
  onGuess: (guess: string) => void;
};

const Buttons = ({ onGuess }: Props) => {
  const { all, centerLetter, outerLetters } = useLetters();
  const [guess, setGuess] = useState('');
  const [shuffleKey, setShuffleKey] = useState(Date.now());
  const guessRef = useRef('');
  guessRef.current = guess;

  const sortedLetters = useMemo(() => {
    const shuffled = shuffle(outerLetters);
    return [centerLetter, ...shuffled];
  }, [centerLetter, outerLetters, shuffleKey]);

  const makeGuess = useCallback(() => {
    onGuess(guessRef.current);
    setGuess('');
  }, [onGuess, guessRef]);

  const onLetterClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      const button = event.currentTarget;
      const letter = button.getAttribute('data-letter');
      setGuess((g) => `${g}${letter}`);
    },
    [setGuess]
  );

  const onShuffle = useCallback(() => {
    setShuffleKey(Date.now());
  }, [setShuffleKey]);

  const onBackspace = useCallback(() => {
    setGuess((g) => g.substr(0, g.length - 1));
  }, [setGuess]);

  const onKeyPress = useCallback(
    (e: KeyboardEvent) => {
      const { key } = e;

      if (key === 'Backspace') {
        setGuess((g) => g.substring(0, g.length - 1));
        return;
      }

      if (key === ' ') {
        onShuffle();
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
    [onGuess, guessRef]
  );

  useEffect(() => {
    document.addEventListener('keydown', onKeyPress);
    return () => {
      document.removeEventListener('keydown', onKeyPress);
    };
  }, [onKeyPress]);

  const letterButtons = sortedLetters.map((letter) => {
    return (
      <button onClick={onLetterClick} data-letter={letter} key={letter}>
        {letter.toLocaleUpperCase()}
      </button>
    );
  });

  return (
    <div>
      <div>{guess.toLocaleUpperCase()}</div>
      {letterButtons}
      <div>
        <button onClick={onBackspace}>Backspace</button>
        <button onClick={onShuffle}>Shuffle</button>
        <button onClick={makeGuess}>Enter</button>
      </div>
    </div>
  );
};

export default Buttons;
