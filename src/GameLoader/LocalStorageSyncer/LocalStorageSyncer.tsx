import { useNewWordFound } from 'custom-events';
import { gameFoundWords } from 'GameLoader/recoil';
import { WordMap } from 'GameLoader/types';
import { usePuzzlePath } from 'GameLoader/usePuzzlePath';
import { useCallback, useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

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

const LocalStorageSyncer = ({ children }: Props) => {
  const key = usePuzzlePath();
  const setFoundWords = useSetRecoilState(gameFoundWords);

  useEffect(() => {
    setFoundWords(getSavedWords(key));
  }, [key, setFoundWords]);

  const onWordFound = useCallback(
    ({ word, when }) => {
      setFoundWords((old) => {
        const next = { ...old, [word]: when };
        localStorage.setItem(key, JSON.stringify(next));
        return next;
      });
    },
    [key, setFoundWords]
  );

  useNewWordFound(onWordFound);

  return <>{children}</>;
};

export default LocalStorageSyncer;
