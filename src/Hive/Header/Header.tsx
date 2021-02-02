import { Link } from 'react-router-dom';
import classes from './Header.module.css';

const Header = () => {
  return (
    <div className={classes.header}>
      <h1>
        <Link to="/">Staver Humle 🐝</Link>
      </h1>
    </div>
  );
};

export default Header;
