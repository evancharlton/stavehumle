import { useMemo, useState } from 'react';
import { MdInfoOutline as InfoIcon } from 'react-icons/md';
import headerClasses from '../HeaderButton.module.css';
import classes from './InfoButton.module.css';
import Modal from 'Modal';
import Icon from 'Humle';

const LAST_CLOSED_DATE = 'info-dialog/has-closed';

const InfoButton = () => {
  const [showing, setShowing] = useState(() => {
    return !localStorage.getItem(LAST_CLOSED_DATE);
  });

  const modal = useMemo(() => {
    if (!showing) {
      return null;
    }

    return (
      <Modal
        title="Stavehumle!"
        onClose={() => {
          setShowing(false);
          localStorage.setItem(LAST_CLOSED_DATE, new Date().toISOString());
        }}
      >
        <p>
          Stavehumle er et ordspill hvor du lager så mange ord som du kan. Hvert
          puslespill har syv ulike bokstaver&mdash;en fast i midten og seks
          rundt.
        </p>
        <h3>Reglene</h3>
        <p>Hvert ord:</p>
        <ul>
          <li>
            <strong>må bruke</strong> den midterste bokstaven
          </li>
          <li>
            må være minst <strong>fire bokstaver</strong> langt
          </li>
          <li>
            bruker <strong>kun</strong> de syv bokstavene
            <br />
            (men bokstaver kan gjentas)
          </li>
        </ul>
        <p>
          Hver puslespill har <strong>minst ett</strong> ord som bruker{' '}
          <strong>alle bokstavene</strong>.
        </p>
        <p>
          Det finnes en ny puslespill <strong>hver dag!</strong>
        </p>
        <p>Lykke til!</p>
        <hr />
        <p>
          <Icon size={20} /> fra{' '}
          <a
            href="https://linkedin.com/in/baharshahriari/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bahar Anvari
          </a>
        </p>
        <p>
          (Want to play in English? Try the{' '}
          <a
            href="https://www.nytimes.com/puzzles/spelling-bee"
            target="_blank"
            rel="noopener noreferrer"
          >
            NYT Spelling Bee
          </a>
          !)
        </p>
      </Modal>
    );
  }, [showing]);

  return (
    <>
      <button
        onClick={() => setShowing(true)}
        className={[headerClasses.button, classes.button]
          .filter(Boolean)
          .join(' ')}
        aria-label="om Stavehumle"
      >
        <InfoIcon />
      </button>
      {modal}
    </>
  );
};

export default InfoButton;
