import { Link } from 'react-router-dom';
import InfoButton from './InfoButton';
import CalendarButton from './CalendarButton';
import classes from './Header.module.css';
import Icon from 'Humle.svg';

const Header = () => {
  return (
    <div className={classes.header}>
      <h1>
        <Link to="/">Staver humle</Link>
        <img src={Icon} alt="Staver humle icon" />
      </h1>
      <CalendarButton />
      <InfoButton />
    </div>
  );
};

export default Header;
