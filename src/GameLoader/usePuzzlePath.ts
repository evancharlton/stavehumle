import { useRecoilValue } from 'recoil';
import { gamePuzzleId } from './recoil';
import { useLang } from '../LanguageSelector';

export const usePuzzlePath = (key: string = 'saved') => {
  const lang = useLang();
  const puzzleId = useRecoilValue(gamePuzzleId);
  return ['stavehumle', lang, key, puzzleId].join('/');
};
