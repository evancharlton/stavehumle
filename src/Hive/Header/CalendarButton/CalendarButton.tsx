import { useCallback, useMemo, useState } from 'react';
import { MdToday as CalendarIcon } from 'react-icons/md';
import { useHistory } from 'react-router-dom';
import Modal from 'Modal';
import headerClasses from '../HeaderButton.module.css';
import classes from './CalendarButton.module.css';
import DatePicker from './DatePicker';

const CalendarButton = () => {
  const history = useHistory();
  const [showing, setShowing] = useState(false);

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
      <Modal title="Dato" onClose={() => setShowing(false)}>
        <DatePicker onChange={onNewDatePicked} />
      </Modal>
    );
  }, [showing, setShowing, onNewDatePicked]);

  return (
    <>
      <button
        onClick={() => setShowing(true)}
        className={[headerClasses.button, classes.button]
          .filter(Boolean)
          .join(' ')}
      >
        <CalendarIcon />
      </button>
      {modal}
    </>
  );
};

export default CalendarButton;
