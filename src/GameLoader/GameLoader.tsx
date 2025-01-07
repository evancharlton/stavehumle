import { useRecoilValue } from "recoil";
import { useLoadLetters } from "./useLoadLetters";
import { gameWords } from "./recoil";
import { useLoadWords } from "./useLoadWords";
import FirebaseSyncer from "./FirebaseSyncer";
import LocalStorageSyncer from "./LocalStorageSyncer";
import { Loader } from "../spa-components/Loader";

type Props = {
  children: React.ReactNode;
};

const GameLoader = ({ children }: Props) => {
  const { error: loadLettersError } = useLoadLetters();
  const { error: loadWordsError } = useLoadWords();

  const words = useRecoilValue(gameWords);

  if (!words.length) {
    return <Loader />;
  }

  if (loadLettersError) {
    return <div>Error loading the letters</div>;
  }

  if (loadWordsError) {
    console.error(loadWordsError);
    return <div>Error loading the words</div>;
  }

  return (
    <LocalStorageSyncer>
      <FirebaseSyncer>{children}</FirebaseSyncer>
    </LocalStorageSyncer>
  );
};

export default GameLoader;
