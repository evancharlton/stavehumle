import {
  MdKeyboardBackspace as Backspace,
  MdRefresh as Shuffle,
  MdKeyboardReturn as Enter,
} from 'react-icons/md';
import classes from './Buttons.module.css';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useLetters } from 'LettersProvider';
import { useGame } from '../hooks';
import useShuffledLetters from './useShuffledLetters';

const Buttons = () => {
  const { onGuess } = useGame();

  const { all, centerLetter, outerLetters } = useLetters();
  const [guess, setGuess] = useState('');
  const { shuffled, reshuffle } = useShuffledLetters();

  const guessRef = useRef('');
  guessRef.current = guess;

  useEffect(() => {
    guessRef.current = '';
    setGuess('');
  }, [outerLetters, centerLetter]);

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
        reshuffle();
        e.preventDefault();
        return;
      }

      if (key === 'Enter') {
        makeGuess();
      }

      if (!all.includes(key.toLocaleLowerCase())) {
        return;
      }

      setGuess((g) => `${g}${key}`);
    },
    [all, makeGuess, reshuffle]
  );

  useEffect(() => {
    document.addEventListener('keydown', onKeyPress);
    return () => {
      document.removeEventListener('keydown', onKeyPress);
    };
  }, [onKeyPress]);

  type LetterButtonProps = { letter: string } & JSX.IntrinsicElements['button'];

  const LetterButton = ({ letter, className, ...rest }: LetterButtonProps) => {
    return (
      <button
        data-letter={letter}
        onClick={onLetterClick}
        className={[classes.letterButton, className].filter(Boolean).join(' ')}
        {...rest}
      >
        {letter}
      </button>
    );
  };

  const CenterLetterButton = (props: LetterButtonProps) => (
    <LetterButton {...props} className={classes.centerLetter} />
  );

  return (
    <div className={classes.container}>
      <div className={classes.guess}>{guess || <>&nbsp;</>}</div>
      <div className={classes.letterButtons}>
        <div className={classes.topRow}>
          <LetterButton letter={shuffled[0]} />
          <LetterButton letter={shuffled[1]} />
        </div>
        <div className={classes.middleRow}>
          <LetterButton letter={shuffled[2]} />
          <CenterLetterButton letter={centerLetter} />
          <LetterButton letter={shuffled[3]} />
        </div>
        <div className={classes.bottomRow}>
          <LetterButton letter={shuffled[4]} />
          <LetterButton letter={shuffled[5]} />
        </div>
      </div>
      <div className={classes.controls}>
        <button onClick={onBackspace}>
          <Backspace />
        </button>
        <button onClick={reshuffle}>
          <Shuffle />
        </button>
        <button onClick={makeGuess}>
          <Enter />
        </button>
      </div>
    </div>
  );
};

export default Buttons;
