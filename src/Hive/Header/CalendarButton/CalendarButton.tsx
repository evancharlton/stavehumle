import { useCallback, useMemo, useState } from 'react';
import { MdToday as CalendarIcon } from 'react-icons/md';
import { useHistory } from 'react-router-dom';
import Modal from 'Modal';
import headerClasses from '../HeaderButton.module.css';
import DatePicker from './DatePicker';
import { useGameId } from 'hooks';

const CalendarButton = () => {
  const history = useHistory();
  const [showing, setShowing] = useState(false);
  const { gameId } = useGameId();

  const onClose = useCallback(() => {
    setShowing(false);
  }, [setShowing]);

  const onNewDatePicked = useCallback(
    (gameId: string) => {
      onClose();
      history.push(`/${gameId}`);
    },
    [onClose, history]
  );

  const modal = useMemo(() => {
    if (!showing) {
      return null;
    }
    return (
      <Modal title="Velg dato" onClose={() => setShowing(false)}>
        <DatePicker onChange={onNewDatePicked} gameId={gameId} />
      </Modal>
    );
  }, [showing, setShowing, onNewDatePicked, gameId]);

  return (
    <>
      <button
        onClick={() => setShowing(true)}
        className={headerClasses.button}
        aria-label="velg en annen dato"
      >
        <CalendarIcon />
      </button>
      {modal}
    </>
  );
};

export default CalendarButton;
