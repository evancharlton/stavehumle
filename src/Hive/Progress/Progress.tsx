import { useWords } from '../../WordProvider';
import { useGame } from '../hooks';

const Progress = () => {
  const { found } = useGame();
  const { words } = useWords();

  return (
    <div>
      <div>
        {found.length} / {words.length}
      </div>
    </div>
  );
};

export default Progress;
