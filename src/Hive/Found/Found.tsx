import { useMemo } from 'react';
import { useGame } from '../hooks';
import classes from './Found.module.css';

const Found = () => {
  const { found: words } = useGame();
  const cleaned = useMemo(() => {
    const foo = Object.keys(
      words.reduce((acc, word) => ({ ...acc, [word]: true }), {})
    );
    return foo;
  }, [words]);
  return (
    <ul className={classes.wordList}>
      {cleaned.map((word) => (
        <li key={word}>
          <a
            href={`https://naob.no/s%C3%B8k/${encodeURIComponent(word)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {word}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Found;
