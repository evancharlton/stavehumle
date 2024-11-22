import { useMemo } from 'react';
import { useGame } from '../../hooks';
import classes from './WordList.module.css';
import WordsInfo from './WordsInfo';
import RevealButton from './RevealButton';
import Word from './Word';

const WordList = () => {
  const { found: foundWords, revealedWords } = useGame();

  const cleaned = useMemo(() => {
    return [...foundWords, ...revealedWords]
      .sort()
      .map((word) => <Word key={word}>{word}</Word>);
  }, [foundWords, revealedWords]);

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
