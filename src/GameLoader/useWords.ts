import { gameWords } from 'GameLoader/recoil';
import { useRecoilValue } from 'recoil';

export const useWords = () => {
  const words = useRecoilValue(gameWords);
  return { words };
};
