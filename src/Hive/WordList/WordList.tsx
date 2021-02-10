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
    const foundWordsMap: Record<string, true> = foundWords.reduce(
      (acc, word) => ({ ...acc, [word]: true }),
      {}
    );

    if (!revealed) {
      return Object.keys(foundWordsMap).map((word) => (
        <Word key={word}>{word}</Word>
      ));
    }

    return words.sort().map((word) => (
      <Word key={word} revealed={!foundWordsMap[word]}>
        {word}
      </Word>
    ));
  }, [foundWords, revealed, words]);

  return (
    <div className={classes.container}>
      <div className={classes.wordList}>{cleaned}</div>
      <div className={classes.buttons}>
        <WordsInfo />
        <RevealButton />
      </div>
    </div>
  );
};

export default WordList;
