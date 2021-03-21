import { Link } from 'react-router-dom';
import InfoButton from './InfoButton';
import CalendarButton from './CalendarButton';
import classes from './Header.module.css';
import Icon from 'Humle';
import UserDialog from '../UserDialog';

const Header = () => {
  return (
    <div className={classes.header}>
      <h1>
        <Link to="/">Stavehumle</Link>
        <Icon />
        <UserDialog />
      </h1>
      <CalendarButton />
      <InfoButton />
    </div>
  );
};

export default Header;
