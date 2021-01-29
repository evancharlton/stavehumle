import { useCallback, useMemo, useState } from 'react';
import { useLetters } from '../LettersProvider';

const Hive = () => {
  const [guess, setGuess] = useState('');

  const onClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      const button = event.currentTarget;
      const letter = button.getAttribute('data-letter');
      setGuess((g) => `${g}${letter}`);
    },
    [setGuess]
  );

  const { centerLetter, outerLetters } = useLetters();

  const letterButtons = useMemo(() => {
    return [centerLetter, ...outerLetters].filter(Boolean).map((letter) => {
      return (
        <button data-letter={letter} onClick={onClick} key={letter}>
          {letter}
        </button>
      );
    });
  }, [centerLetter, outerLetters, onClick]);

  return (
    <div>
      <div>{guess}</div>
      {letterButtons}
    </div>
  );
};

export default Hive;
