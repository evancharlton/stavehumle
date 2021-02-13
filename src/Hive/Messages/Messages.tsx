import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import ErrorMessage from './ErrorMessage';
import { BadGuess } from '../Hive';
import classes from './Messages.module.css';
import isPangram from 'isPangram';

const Messages = () => {
  const [displayedMessage, setDisplayedMessage] = useState<
    BadGuess | 'pangram' | undefined
  >();
  const timerIdRef = useRef<NodeJS.Timeout | null>();

  const showMessage = useCallback(
    (msg: BadGuess | 'pangram' | undefined) => {
      setDisplayedMessage(msg);
      if (timerIdRef.current) {
        clearTimeout(timerIdRef.current);
      }

      if (!msg) {
        timerIdRef.current = null;
        return;
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

  const onWordFound = useCallback(
    (e: Event) => {
      const { detail: word } = e as CustomEvent;
      if (isPangram(word)) {
        showMessage('pangram');
      } else {
        showMessage(undefined);
      }
    },
    [showMessage]
  );

  useEffect(() => {
    window.addEventListener('bad-guess', onBadGuess);
    window.addEventListener('found-word', onWordFound);
    return () => {
      window.removeEventListener('bad-guess', onBadGuess);
      window.removeEventListener('found-word', onWordFound);
    };
  }, [onBadGuess, onWordFound]);

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
