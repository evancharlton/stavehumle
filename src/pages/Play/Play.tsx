import WordsProvider from '../../WordProvider';
import LettersProvider from '../../LettersProvider';
import Hive from '../../Hive';

const Play = () => {
  return (
    <LettersProvider>
      <WordsProvider>
        <Hive />
      </WordsProvider>
    </LettersProvider>
  );
};

export default Play;
