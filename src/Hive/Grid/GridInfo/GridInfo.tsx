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
      <Modal title="Nett" onClose={() => setShowing(false)}>
        <p>
          Nettet er et verktøy for å hjelp du finne alle ordene i puslespillet.
          Radene er ord som starter med hver bokstave, og kolonnene er hvor
          mange ord av hver lange.
        </p>
        <p>Nettet viser ord totalt, også. Lykke til finner alt!</p>
      </Modal>
    );
  }, [showing, setShowing]);

  return (
    <>
      <button className={classes.button} onClick={() => setShowing(true)}>
        <HelpIcon />
      </button>
      {modal}
    </>
  );
};

export default Info;
