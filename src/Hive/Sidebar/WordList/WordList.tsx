import { useMemo } from 'react';
import { useGame } from '../../hooks';
import classes from './WordList.module.css';
import WordsInfo from './WordsInfo';
import RevealButton from './RevealButton';
import Word from './Word';
import { useRevealed } from 'Hive/useRevealed';
import { useWords } from 'GameLoader';

const WordList = () => {
  const { revealed } = useRevealed();
  const { words } = useWords();
  const { found: foundWords } = useGame();

  const cleaned = useMemo(() => {
    return [...(revealed ? words : foundWords)]
      .sort()
      .map((word) => <Word key={word}>{word}</Word>);
  }, [foundWords, revealed, words]);

  return (
    <div className={classes.container}>
      <div className={classes.buttons}>
        <WordsInfo />
        <RevealButton />
      </div>
      <div className={classes.wordList}>{cleaned}</div>
    </div>
  );
};

export default WordList;
