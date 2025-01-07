import { NewWordInfo, useNewWordFound } from "../../custom-events";
import { gameFoundWords } from "../recoil";
import { usePuzzlePath } from "../usePuzzlePath";
import { useCallback, useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { getSavedWords } from "../../storage";

type Props = {
  children: React.ReactNode;
};

const LocalStorageSyncer = ({ children }: Props) => {
  const key = usePuzzlePath();
  const setFoundWords = useSetRecoilState(gameFoundWords);

  useEffect(() => {
    setFoundWords(getSavedWords(key));
  }, [key, setFoundWords]);

  const onWordFound = useCallback(
    ({ word, when }: NewWordInfo) => {
      setFoundWords((old) => {
        const next = { ...old, [word]: when };
        localStorage.setItem(key, JSON.stringify(next));
        return next;
      });
    },
    [key, setFoundWords],
  );

  useNewWordFound(onWordFound);

  return <>{children}</>;
};

export default LocalStorageSyncer;
