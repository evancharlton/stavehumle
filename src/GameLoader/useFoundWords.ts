import { useRecoilValue } from 'recoil';
import { gameFoundWords } from './recoil';

export const useFoundWords = () => {
  const foundWords = useRecoilValue(gameFoundWords);
  return {
    found: foundWords,
  };
};
