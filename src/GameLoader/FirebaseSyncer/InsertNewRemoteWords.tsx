import { FoundWordEvent } from 'custom-events';
import { gameFoundWords } from 'GameLoader/recoil';
import { useWords } from 'GameLoader/useWords';
import { useCallback, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import firebase from 'sync';

type Props = {
  children: React.ReactNode;
  node: string;
};

const InsertNewRemoteWords = ({ children, node }: Props) => {
  const foundWords = useRecoilValue(gameFoundWords);
  const { words: validWords } = useWords();

  const onWordFound = useCallback(
    (snap: firebase.database.DataSnapshot) => {
      const newWord = snap.key;
      if (!newWord) {
        console.warn('No key specified');
        return;
      }

      if (foundWords[newWord]) {
        // Already discovered
        return;
      }

      const dateStr = snap.val();
      if (!validWords.includes(newWord)) {
        console.warn(`"${newWord}" is not a recognized word`);
        return;
      }

      const timestamp = Date.parse(dateStr);
      if (timestamp === undefined) {
        console.warn(`"${newWord}" didn't have a valid date (${dateStr})`);
        return;
      }

      window.dispatchEvent(
        new FoundWordEvent(newWord, new Date(timestamp), 'remote')
      );
    },
    [validWords, foundWords]
  );

  useEffect(() => {
    const ref = firebase.database().ref(node);
    ref.on('child_added', onWordFound);
    return () => {
      ref.off('child_added', onWordFound);
    };
  }, [onWordFound, node]);

  return <>{children}</>;
};

export default InsertNewRemoteWords;
