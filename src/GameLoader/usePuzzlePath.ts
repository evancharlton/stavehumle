import { useRecoilValue } from 'recoil';
import { gamePuzzleId } from './recoil';

// I'm not thrilled about this.
export const usePuzzlePath = () => {
  const puzzleId = useRecoilValue(gamePuzzleId);
  return ['nb-no', 'saved', puzzleId].join('/');
};
