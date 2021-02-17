import { useMemo } from 'react';
import { useGame } from '../hooks';
import classes from './WordList.module.css';
import WordsInfo from './WordsInfo';
import RevealButton from './RevealButton';
import Word from './Word';
import { useRevealed } from 'Hive/useRevealed';
import { useWords } from 'WordProvider';

const WordList = () => {
  const { revealed } = useRevealed();
  const { words } = useWords();
  const { found: foundWords } = useGame();

  const cleaned = useMemo(() => {
    return (revealed ? words : foundWords).map((word) => (
      <Word key={word}>{word}</Word>
    ));
  }, [foundWords, revealed, words]);

  return (
    <div className={classes.container}>
      <div className={classes.wordList}>{cleaned}</div>
      <div className={classes.buttons}>
        <WordsInfo />
        <RevealButton />
        <h2
          className={classes.count}
          title={`Du har funnet ${foundWords.length} ord`}
        >
          {foundWords.length}
        </h2>
      </div>
    </div>
  );
};

export default WordList;
