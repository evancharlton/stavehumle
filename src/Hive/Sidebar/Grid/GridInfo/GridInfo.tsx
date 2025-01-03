import classes from './GridInfo.module.css';
import { MdHelpOutline as HelpIcon } from 'react-icons/md';
import { useState } from 'react';
import { Modal } from '../../../../spa-components/Modal';

const Info = () => {
  const [showing, setShowing] = useState(false);

  return (
    <>
      <button
        className={classes.button}
        onClick={() => setShowing(true)}
        aria-label="Oversikten hjelp"
      >
        <HelpIcon />
      </button>
      <Modal open={showing} title="Oversikt" onClose={() => setShowing(false)}>
        <p>
          Oversikten er et verktøy for å hjelpe deg å finne alle ordene i
          puslespillet. Radene viser antall ord som starter med en viss bokstav,
          og kolonnene viser antall ord av hver lengde.
        </p>
        <p>
          Oversikten viser også antall ord totalt. Lykke til med å finne alt!
        </p>
      </Modal>
    </>
  );
};

export default Info;
