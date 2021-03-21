import Buttons from './Buttons';
import Header from './Header';
import Messages from './Messages';
import classes from './Hive.module.css';
import Sidebar from './Sidebar';

export type BadGuess =
  | 'too-short'
  | 'missing-center'
  | 'already-found'
  | 'unknown-word'
  | 'invalid-letters';

const Hive = () => {
  return (
    <div className={classes.container}>
      <Header />
      <div className={classes.gameContainer}>
        <div className={classes.buttonsContainer}>
          <Messages />
          <Buttons />
        </div>
        <Sidebar />
      </div>
    </div>
  );
};

export default Hive;
