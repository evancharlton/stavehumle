import { useCallback, useState } from 'react';
import { MdToday as CalendarIcon } from 'react-icons/md';
import { useNavigate, useParams } from 'react-router';
import headerClasses from '../HeaderButton.module.css';
import DatePicker from './DatePicker';
import { useGameId } from '../../hooks';
import { Modal } from '../../spa-components/Modal';

const CalendarButton = () => {
  const { lang } = useParams();
  const navigate = useNavigate();
  const [showing, setShowing] = useState(false);
  const { gameId } = useGameId();

  const onClose = useCallback(() => {
    setShowing(false);
  }, [setShowing]);

  const onNewDatePicked = useCallback(
    (gameId: string) => {
      onClose();
      navigate(`/${lang}/${gameId}`);
    },
    [onClose, navigate, lang],
  );

  return (
    <>
      <button
        onClick={() => setShowing(true)}
        className={headerClasses.button}
        aria-label="velg en annen dato"
      >
        <CalendarIcon />
      </button>
      <Modal open={showing} title="Velg dato" onClose={() => setShowing(false)}>
        <div style={{ width: 'min-content', margin: '0 auto' }}>
          <DatePicker onChange={onNewDatePicked} gameId={gameId} />
        </div>
      </Modal>
    </>
  );
};

export default CalendarButton;
