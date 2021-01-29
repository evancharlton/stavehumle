import { useMemo } from 'react';
import { useScore } from '../hooks';

type Props = {
  words: string[];
};

const Score = ({ words }: Props) => {
  const { score } = useScore(words);
  return <h1>{score}</h1>;
};

export default Score;
