import { gameWords } from './recoil';
import { useRecoilValue } from 'recoil';

export const useWords = () => {
  const words = useRecoilValue(gameWords);
  return { words };
};
