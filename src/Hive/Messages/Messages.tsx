import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import ErrorMessage from './ErrorMessage';
import { BadGuess } from '../Hive';
import classes from './Messages.module.css';

const Messages = () => {
  const [displayedMessage, setDisplayedMessage] = useState<
    BadGuess | 'pangram'
  >();
  const timerIdRef = useRef<NodeJS.Timeout | null>();

  const showMessage = useCallback(
    (msg: BadGuess | 'pangram') => {
      setDisplayedMessage(msg);
      if (timerIdRef.current) {
        clearTimeout(timerIdRef.current);
      }
      timerIdRef.current = setTimeout(() => {
        setDisplayedMessage(undefined);
        timerIdRef.current = null;
      }, 2500);
    },
    [timerIdRef, setDisplayedMessage]
  );

  const onBadGuess = useCallback(
    (e) => {
      const badGuess = (e as CustomEvent<string>).detail as BadGuess;
      showMessage(badGuess);
    },
    [showMessage]
  );

  const onPangram = useCallback(() => {
    showMessage('pangram');
  }, [showMessage]);

  useEffect(() => {
    window.addEventListener('bad-guess', onBadGuess);
    window.addEventListener('pangram', onPangram);
    return () => {
      window.removeEventListener('bad-guess', onBadGuess);
      window.removeEventListener('pangram', onPangram);
    };
  }, [onBadGuess, onPangram]);

  const message = useMemo(() => {
    if (!displayedMessage) {
      return null;
    }

    if (displayedMessage === 'pangram') {
      return <span className={classes.pangram}>Pangram!</span>;
    }

    return <ErrorMessage reason={displayedMessage} />;
  }, [displayedMessage]);

  return <div className={classes.container}>{message}</div>;
};

export default Messages;
