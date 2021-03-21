import Loading from 'Loading';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useLoadLetters } from './useLoadLetters';
import { gameFoundWords, gameWords } from './recoil';
import { useLoadWords } from './useLoadWords';
import type { WordMap } from './types';
import { useCallback, useEffect } from 'react';
import { usePuzzlePath } from './usePuzzlePath';

type Props = {
  children: React.ReactNode;
};

const getSavedWords = (key: string): WordMap => {
  try {
    const item = localStorage.getItem(key);
    if (item) {
      const saved = JSON.parse(item);
      if (Array.isArray(saved)) {
        // We're about to destructively migrate some data. Let's stash a copy
        // just because I'm scared.
        localStorage.setItem(`backup/${key}`, item);

        return saved
          .filter((word) => typeof word === 'string')
          .reduce((acc, word, i) => ({ ...acc, [word]: new Date(i) }), {});
      }
      return Object.entries(saved)
        .filter(([_, date]) => !!date)
        .reduce((acc, [k, v]) => ({ ...acc, [k]: v }), {});
    }
  } catch (ex) {
    // Do nothing
  }

  return {} as WordMap;
};

const useWordsWatcher = () => {
  const key = usePuzzlePath();
  const setFoundWords = useSetRecoilState(gameFoundWords);

  useEffect(() => {
    setFoundWords(getSavedWords(key));
  }, [key, setFoundWords]);

  const onWordFound = useCallback(
    (e: Event) => {
      const { detail: word } = e as CustomEvent<string>;
      const foundTime = new Date();
      setFoundWords((old) => {
        const next = { ...old, [word]: foundTime };
        localStorage.setItem(key, JSON.stringify(next));
        return next;
      });
    },
    [key, setFoundWords]
  );

  useEffect(() => {
    window.addEventListener('found-word', onWordFound);
    return () => {
      window.removeEventListener('found-word', onWordFound);
    };
  }, [onWordFound]);
};

const GameLoader = ({ children }: Props) => {
  const { error: loadLettersError } = useLoadLetters();
  const { error: loadWordsError } = useLoadWords();

  const words = useRecoilValue(gameWords);

  useWordsWatcher();

  if (!words.length) {
    return <Loading />;
  }

  if (loadLettersError) {
    return <div>Error loading the letters</div>;
  }

  if (loadWordsError) {
    console.error(loadWordsError);
    return <div>Error loading the words</div>;
  }

  return <>{children}</>;
};

export default GameLoader;
