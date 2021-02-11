import classes from './GridInfo.module.css';
import { MdHelpOutline as HelpIcon } from 'react-icons/md';
import { useMemo, useState } from 'react';
import Modal from 'Modal';

const Info = () => {
  const [showing, setShowing] = useState(false);

  const modal = useMemo(() => {
    if (!showing) {
      return null;
    }
    return (
      <Modal title="Oversikt" onClose={() => setShowing(false)}>
        <p>
          Oversikten er et verktøy for å hjelp du finne alle ordene i
          puslespillet. Radene er ord som starter med hver bokstav, og kolonnene
          er hvor mange ord av hver lengde.
        </p>
        <p>Oversikten viser ord totalt, også. Lykke til med å finne alt!</p>
      </Modal>
    );
  }, [showing, setShowing]);

  return (
    <>
      <button
        className={classes.button}
        onClick={() => setShowing(true)}
        aria-label="Oversikten hjelp"
      >
        <HelpIcon />
      </button>
      {modal}
    </>
  );
};

export default Info;
