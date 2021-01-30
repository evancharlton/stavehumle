import { useWords } from '../../WordProvider';
import { useGame, useScore } from '../hooks';

const Score = () => {
  const { found } = useGame();
  const { words } = useWords();

  const { score } = useScore(found);
  const { score: total } = useScore(words);
  return (
    <h1>
      {score} / {total}
    </h1>
  );
};

export default Score;
