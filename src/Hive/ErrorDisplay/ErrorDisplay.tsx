import { useEffect, useState } from 'react';
import ErrorMessage from './ErrorMessage';
import { useGame } from '../hooks';
import { BadGuess } from '../Hive';
import classes from './ErrorDisplay.module.css';

const ErrorDisplay = () => {
  const { badGuess } = useGame();
  const [displayedError, setDisplayedError] = useState<BadGuess['reason']>();

  useEffect(() => {
    if (!badGuess) {
      setDisplayedError(undefined);
      return;
    }

    setDisplayedError(badGuess.reason);
    const timerId = setTimeout(() => {
      setDisplayedError(undefined);
    }, 2500);

    return () => {
      clearTimeout(timerId);
    };
  }, [badGuess]);

  return (
    <div className={classes.container}>
      {displayedError && <ErrorMessage reason={displayedError} />}
    </div>
  );
};

export default ErrorDisplay;
