import { useGame } from 'Hive/hooks';
import { useMemo, useState } from 'react';
import { useWords } from 'WordProvider';
import classes from './Grid.module.css';
import WordGrid from './WordGrid';
import GridInfo from './GridInfo';

const cls = (...classNames: (string | boolean)[]): string => {
  return classNames.filter(Boolean).join(' ');
};

const Grid = () => {
  const { found: foundWords } = useGame();
  const { words: allWords } = useWords();
  const [mode, setMode] = useState<'all' | 'remaining' | 'found'>('remaining');

  const gridWords = useMemo(() => {
    if (mode === 'all') {
      return allWords;
    }

    if (mode === 'found') {
      return foundWords;
    }

    const foundLookup: Record<string, true> = foundWords.reduce(
      (acc, word) => ({ ...acc, [word]: true }),
      {}
    );

    return allWords.filter((word) => !foundLookup[word]);
  }, [mode, allWords, foundWords]);

  const range: [number, number] = allWords.reduce(
    ([min, max], word) => {
      return [Math.min(min, word.length), Math.max(max, word.length)];
    },
    [1000, 3]
  );

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <button
          onClick={() => setMode('found')}
          className={cls(
            classes.mode,
            classes.found,
            mode === 'found' && classes.active
          )}
        >
          Funnet
        </button>
        <button
          onClick={() => setMode('remaining')}
          className={cls(
            classes.mode,
            classes.remaining,
            mode === 'remaining' && classes.active
          )}
        >
          Gjenstår
        </button>
        <button
          onClick={() => setMode('all')}
          className={cls(
            classes.mode,
            classes.all,
            mode === 'all' && classes.active
          )}
        >
          Alt
        </button>
        <GridInfo />
      </div>
      <WordGrid range={range} words={gridWords} />
    </div>
  );
};

export default Grid;
