import { useWords } from '../../WordProvider';
import { useGame, useScore } from '../hooks';
import classes from './Progress.module.css';

const Progress = () => {
  const { found } = useGame();
  const { words } = useWords();

  const { score: currentPoints } = useScore(found);
  const { score: totalPoints } = useScore(words);

  return (
    <div className={classes.container}>
      <progress id="word-progress" max={words.length} value={found.length} />
      <label htmlFor="word-progress">
        Ord: {found.length} / {words.length}
      </label>
      <progress id="points-progress" max={totalPoints} value={currentPoints} />
      <label htmlFor="points-progress">
        Poeng: {currentPoints} / {totalPoints}
      </label>
    </div>
  );
};

export default Progress;
