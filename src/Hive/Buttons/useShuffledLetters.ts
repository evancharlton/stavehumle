import { useCallback, useEffect, useState } from 'react';
import { useLetters } from 'LettersProvider';
import shuffle from 'shuffle';

const useShuffledLetters = () => {
  const { outerLetters } = useLetters();
  const [shuffled, setShuffled] = useState<string[]>([]);

  const shuffleLetters = useCallback(() => {
    setShuffled(shuffle(outerLetters));
  }, [outerLetters]);

  useEffect(() => {
    setShuffled(shuffle(outerLetters));
  }, [outerLetters, setShuffled]);

  return {
    shuffled,
    reshuffle: shuffleLetters,
  };
};

export default useShuffledLetters;
