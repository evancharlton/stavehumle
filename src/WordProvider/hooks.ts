import { useContext } from 'react';
import { Context } from './WordsProvider';

export const useWords = () => {
  return useContext(Context);
};
