import { Link } from 'react-router-dom';
import InfoButton from '../InfoButton';
import classes from './Header.module.css';

const Header = () => {
  return (
    <div className={classes.header}>
      <h1>
        <Link to="/">Staver Humle 🐝</Link>
      </h1>
      <InfoButton />
    </div>
  );
};

export default Header;
