import Buttons from './Buttons';
import Messages from './Messages';
import classes from './Hive.module.css';
import Sidebar from './Sidebar';
import { ButtonsPortal } from '../spa-components/Header';
import CalendarButton from '../Header/CalendarButton';
import UserDialog from '../Header/UserDialog';

export type BadGuess =
  | 'too-short'
  | 'missing-center'
  | 'already-found'
  | 'unknown-word'
  | 'revealed'
  | 'invalid-letters';

const Hive = () => {
  return (
    <>
      <ButtonsPortal>
        <CalendarButton />
        <UserDialog />
      </ButtonsPortal>
      <div className={classes.gameContainer}>
        <div className={classes.buttonsContainer}>
          <Messages />
          <Buttons />
        </div>
        <Sidebar />
      </div>
    </>
  );
};

export default Hive;
