import Modal from '../../../../Modal';
import { ReactNode, useMemo, useState } from 'react';
import { MdCheck as Reveal } from 'react-icons/md';
import { useFoundWords, useLetters, useWords } from '../../../../GameLoader';
import { useRevealWords } from '../../../useRevealed';
import classes from './RevealButton.module.css';

const RevealButton = () => {
  const { revealAnswers } = useRevealWords();
  const [prompting, setPrompting] = useState(false);
  const { found: foundWords, revealedWords } = useFoundWords();
  const { words: allWords } = useWords();
  const { all } = useLetters();

  const letters = useMemo(() => [...all], [all]);
  const [shortest, longest] = useMemo(
    () =>
      allWords.reduce(
        ([min, max], word) => [
          Math.min(min, word.length),
          Math.max(max, word.length),
        ],
        [Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER],
      ),
    [allWords],
  );

  const modal = useMemo(() => {
    if (!prompting) {
      return null;
    }

    const revealedSet = new Set(revealedWords);
    const remainingWords = allWords.filter(
      (word) => !foundWords[word] && !revealedSet.has(word),
    );

    const buttons: ReactNode[] = [];
    buttons.push(<span />);
    for (let i = shortest; i <= longest; i += 1) {
      buttons.push(
        <button
          key={`length-${i}`}
          disabled={!remainingWords.some((word) => word.length === i)}
          onClick={() => {
            revealAnswers({ which: 'length', length: i });
            setPrompting(false);
          }}
        >
          {i}
        </button>,
      );
    }

    for (const letter of letters) {
      buttons.push(
        <button
          key={`letter-${letter}`}
          disabled={!remainingWords.some((word) => word[0] === letter)}
          onClick={() => {
            revealAnswers({ which: 'letter', letter });
            setPrompting(false);
          }}
        >
          {letter}
        </button>,
      );
      for (let i = shortest; i <= longest; i += 1) {
        const count = remainingWords.filter(
          (word) => word[0] === letter && word.length === i,
        ).length;
        buttons.push(
          <button
            key={`letter-length-${letter}-${i}`}
            disabled={count === 0}
            onClick={() => {
              revealAnswers({ which: 'letter-length', length: i, letter });
              setPrompting(false);
            }}
          >
            {count}
          </button>,
        );
      }
    }

    return (
      <Modal title="Er du ferdig?" onClose={() => setPrompting(false)}>
        <h2>Avdekke alle ordene?</h2>
        <p>
          Når du er ferdig, kan du vise alle ordene. Du har{' '}
          {remainingWords.length} ord som gjenstår!
        </p>
        <div className={classes.revealContainer}>
          <div
            className={classes.revealGrid}
            style={{
              gridTemplateColumns: `repeat(${longest + 2 - shortest}, 1fr)`,
            }}
          >
            {buttons}
          </div>
          <button
            onClick={() => {
              revealAnswers({ which: 'all' });
              setPrompting(false);
            }}
          >
            Jeg er helt ferdig!
          </button>
        </div>
        <p>
          Hvis du vil forsette å søke, klikk på <strong>«Lukk»</strong>{' '}
          nedenfor.
        </p>
      </Modal>
    );
  }, [
    prompting,
    revealedWords,
    allWords,
    longest,
    shortest,
    revealAnswers,
    foundWords,
    letters,
  ]);

  return (
    <>
      <button
        className={classes.reveal}
        onClick={() => setPrompting(true)}
        aria-label="Avdekke ordene"
      >
        <Reveal />
      </button>
      {modal}
    </>
  );
};

export default RevealButton;