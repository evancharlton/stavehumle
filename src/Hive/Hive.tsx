import Buttons from './Buttons';
import Messages from './Messages';
import classes from './Hive.module.css';
import Sidebar from './Sidebar';
import { HamburgerMenu } from './HamburgerMenu';
import CalendarDialog from '../Header/CalendarDialog';
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
      <div className={classes.gameContainer}>
        <div className={classes.buttonsContainer}>
          <Messages />
          <Buttons />
        </div>
        <Sidebar />
      </div>
      <HamburgerMenu />
      <CalendarDialog />
      <UserDialog />
    </>
  );
};

export default Hive;
