import { useCallback, useEffect, useRef, useState } from 'react';
import {
  MdKeyboardBackspace as Backspace,
  MdRefresh as Shuffle,
  MdKeyboardReturn as Enter,
} from 'react-icons/md';
import { useLetters } from '../../LettersProvider';
import shuffle from '../../shuffle';
import { useGame } from '../hooks';
import classes from './Buttons.module.css';

const Buttons = () => {
  const { onGuess } = useGame();

  const { all, centerLetter, outerLetters } = useLetters();
  const [guess, setGuess] = useState('');
  const [shuffledOuterLetters, setShuffledOuterLetters] = useState<string[]>(
    []
  );
  const guessRef = useRef('');
  guessRef.current = guess;

  useEffect(() => {
    guessRef.current = '';
    setShuffledOuterLetters(shuffle(outerLetters));
  }, [outerLetters, setShuffledOuterLetters, guessRef]);

  useEffect(() => {
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

  const onShuffle = useCallback(() => {
    setShuffledOuterLetters(shuffle(outerLetters) as typeof outerLetters);
  }, [setShuffledOuterLetters, outerLetters]);

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
    [all, makeGuess, onShuffle]
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
          <LetterButton letter={shuffledOuterLetters[0]} />
          <LetterButton letter={shuffledOuterLetters[1]} />
        </div>
        <div className={classes.middleRow}>
          <LetterButton letter={shuffledOuterLetters[2]} />
          <CenterLetterButton letter={centerLetter} />
          <LetterButton letter={shuffledOuterLetters[3]} />
        </div>
        <div className={classes.bottomRow}>
          <LetterButton letter={shuffledOuterLetters[4]} />
          <LetterButton letter={shuffledOuterLetters[5]} />
        </div>
      </div>
      <div className={classes.controls}>
        <button onClick={onBackspace}>
          <Backspace />
        </button>
        <button onClick={onShuffle}>
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
