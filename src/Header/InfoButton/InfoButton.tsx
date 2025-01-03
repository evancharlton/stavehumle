import { useState } from 'react';
import { MdInfoOutline as InfoIcon } from 'react-icons/md';
import headerClasses from '../HeaderButton.module.css';
import { Modal } from '../../spa-components/Modal';
import classes from './InfoButton.module.css';

const LAST_CLOSED_DATE = 'info-dialog/has-closed';

const InfoButton = () => {
  const [showing, setShowing] = useState(() => {
    return !localStorage.getItem(LAST_CLOSED_DATE);
  });

  return (
    <>
      <button
        onClick={() => setShowing(true)}
        className={headerClasses.button}
        aria-label="om Stavehumle"
      >
        <InfoIcon />
      </button>
      <Modal
        open={showing}
        title="Stavehumle!"
        onClose={() => {
          setShowing(false);
          localStorage.setItem(LAST_CLOSED_DATE, new Date().toISOString());
        }}
        className={classes.modal}
      >
        <div className={classes.container}>
          <p>
            Stavehumle er et ordspill hvor du lager så mange ord som du kan.
            Hvert puslespill har syv ulike bokstaver&mdash;en fast i midten og
            seks rundt.
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
          <p
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: 4,
              alignItems: 'center',
            }}
          >
            <img src="/logo.svg" alt="Stavehumle ikon (en bie)" height="20" />{' '}
            fra{' '}
            <a
              href="https://www.linkedin.com/in/baharanvari/"
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
        </div>
      </Modal>
    </>
  );
};

export default InfoButton;
