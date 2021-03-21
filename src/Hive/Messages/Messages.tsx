import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import ErrorMessage from './ErrorMessage';
import { BadGuess } from '../Hive';
import classes from './Messages.module.css';
import isPangram from 'isPangram';
import scoreWord from 'score';
import { NewWordInfo, useNewWordFound } from 'custom-events';

type FoundWord = {
  points: number;
};

type PangramMessage = {
  points: number;
  isPangram: true;
};

type MessageType = BadGuess | PangramMessage | FoundWord | undefined;

const isFoundWord = (obj: unknown): obj is FoundWord => {
  return !!(obj && (obj as FoundWord).points);
};

const isPangramMessage = (obj: unknown): obj is PangramMessage => {
  return !!(obj && (obj as PangramMessage).isPangram);
};

const Messages = () => {
  const [displayedMessage, setDisplayedMessage] = useState<MessageType>();
  const timerIdRef = useRef<NodeJS.Timeout | null>();

  const showMessage = useCallback(
    (msg: MessageType) => {
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
    ({ word, source }: NewWordInfo) => {
      if (source !== 'local') {
        return;
      }

      if (isPangram(word)) {
        showMessage({ points: scoreWord(word), isPangram: true });
      } else {
        showMessage({ points: scoreWord(word) });
      }
    },
    [showMessage]
  );

  useEffect(() => {
    window.addEventListener('bad-guess', onBadGuess);
    return () => {
      window.removeEventListener('bad-guess', onBadGuess);
    };
  }, [onBadGuess]);

  useNewWordFound(onWordFound);

  const message = useMemo(() => {
    if (!displayedMessage) {
      return null;
    }

    if (isPangramMessage(displayedMessage)) {
      return (
        <span className={classes.pangram}>
          Pangram!
          <br />+{displayedMessage.points} poeng
        </span>
      );
    }

    if (isFoundWord(displayedMessage)) {
      return (
        <span className={classes.points}>+{displayedMessage.points} poeng</span>
      );
    }

    return <ErrorMessage reason={displayedMessage} />;
  }, [displayedMessage]);

  return <div className={classes.container}>{message}</div>;
};

export default Messages;
