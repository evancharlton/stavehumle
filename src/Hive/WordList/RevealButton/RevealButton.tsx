import { useGame } from 'Hive/hooks';
import Modal from 'Modal';
import { useMemo, useState } from 'react';
import { MdCheck as Reveal } from 'react-icons/md';
import { useWords } from 'WordProvider';
import { useRevealed } from '../../useRevealed';
import classes from './RevealButton.module.css';

const RevealButton = () => {
  const { revealed, revealAnswers } = useRevealed();
  const [prompting, setPrompting] = useState(false);
  const { found: foundWords } = useGame();
  const { words: allWords } = useWords();

  const remaining = allWords.length - foundWords.length;
  const modal = useMemo(() => {
    if (!prompting) {
      return null;
    }
    return (
      <Modal title="Er du ferdig?" onClose={() => setPrompting(false)}>
        <h2>Avdekke alle ordene?</h2>
        <p>
          Når du er ferdig, kan du vise alle ordene. Du har {remaining} ord som
          gjenstår!
        </p>
        <div className={classes.revealContainer}>
          <button
            onClick={() => {
              revealAnswers();
              setPrompting(false);
            }}
          >
            Jeg er ferdig!
          </button>
        </div>
        <p>
          Hvis du vil forsette å søke, klikk på <strong>«Lukk»</strong>{' '}
          nedenfor.
        </p>
      </Modal>
    );
  }, [prompting, setPrompting, remaining, revealAnswers]);

  return (
    <>
      <button
        className={classes.reveal}
        disabled={revealed}
        onClick={() => setPrompting(true)}
        aria-label="Avdekke alle ordene"
      >
        <Reveal />
      </button>
      {modal}
    </>
  );
};

export default RevealButton;
