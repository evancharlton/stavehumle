import { gameLetters, gamePuzzleId } from 'GameLoader/recoil';
import { useRecoilValue } from 'recoil';

export const useLetters = () => {
  const puzzleId = useRecoilValue(gamePuzzleId);
  const letters = useRecoilValue(gameLetters);
  return {
    ...letters,
    puzzleId,
  };
};
