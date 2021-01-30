import { useContext } from 'react';
import { Context } from './LettersProvider';

export const useLetters = () => {
  return useContext(Context);
};
