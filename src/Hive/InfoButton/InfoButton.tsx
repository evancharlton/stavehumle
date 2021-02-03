import { useMemo, useState } from 'react';
import { MdInfoOutline as InfoIcon } from 'react-icons/md';
import classes from './InfoButton.module.css';
import Modal from '../../Modal';

const InfoButton = () => {
  const [showing, setShowing] = useState(true);

  const modal = useMemo(() => {
    if (!showing) {
      return null;
    }
    return (
      <Modal title="Staver Humle!" onClose={() => setShowing(false)}>
        <p>
          Staver Humle er et ordspill hvor du lage så mange ord som du kan.
          Hvert puslespill har syv ulike bokstaver&mdash;en fast i midten og
          seks rundt.
        </p>
        <h3>Reglene</h3>
        <p>
          Hvert ord:
          <ul>
            <li>
              <strong>må bruke</strong> den midterste bokstaven
            </li>
            <li>
              være minst <strong>fire bokstaver</strong> lange
            </li>
            <li>
              bruker <strong>bare</strong> de syv bokstavene
              <br />
              (men bokstaver kan gjentas)
            </li>
          </ul>
        </p>
        <p>
          Hver puslespill har <strong>minst ett</strong> ord som bruker{' '}
          <strong>alle bokstavene</strong>.
        </p>
        <p>
          Det er en ny puslespill <strong>hver dag!</strong>
        </p>
        <p>Lykke til!</p>
        <p>
          <em>
            (Want to play in English? Try the{' '}
            <a
              href="https://www.nytimes.com/puzzles/spelling-bee"
              target="_blank"
              rel="noopener noreferrer"
            >
              NYT Spelling Bee
            </a>
            !)
          </em>
        </p>
      </Modal>
    );
  }, [showing]);

  return (
    <>
      <button onClick={() => setShowing(true)} className={classes.button}>
        <InfoIcon />
      </button>
      {modal}
    </>
  );
};

export default InfoButton;
