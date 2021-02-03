import useNoBodyScroll from '../useNoBodyScroll';
import classes from './Loading.module.css';

const Loading = () => {
  useNoBodyScroll();

  return (
    <div className={classes.container}>
      <div className={classes.ldsRipple}>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
