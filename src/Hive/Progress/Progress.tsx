import { useWords } from '../../WordProvider';
import { useScore } from '../hooks';

type Props = {
  found: string[];
};

const Progress = ({ found }: Props) => {
  const { words } = useWords();
  const { score: total } = useScore(words);
  const { score: current } = useScore(found);

  return (
    <div>
      <div>
        {current} / {total}
      </div>
      <div>
        {found.length} / {words.length}
      </div>
    </div>
  );
};

export default Progress;
