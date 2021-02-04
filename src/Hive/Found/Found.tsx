import { useMemo } from 'react';
import { useGame } from '../hooks';
import classes from './Found.module.css';
import WordsInfo from './WordsInfo';

const Found = () => {
  const { found: words } = useGame();
  const cleaned = useMemo(() => {
    const foo = Object.keys(
      words.reduce((acc, word) => ({ ...acc, [word]: true }), {})
    );
    return foo;
  }, [words]);

  return (
    <div className={classes.container}>
      <div className={classes.wordList}>
        {cleaned.map((word) => (
          <a
            className={classes.word}
            key={word}
            href={`https://naob.no/s%C3%B8k/${encodeURIComponent(word)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {word}
          </a>
        ))}
      </div>
      <WordsInfo />
    </div>
  );
};

export default Found;
