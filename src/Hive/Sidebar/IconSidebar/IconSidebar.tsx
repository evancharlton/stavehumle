import classes from './IconSidebar.module.css';

type Props = {
  children: React.ReactNode;
};

const IconSidebar = ({ children }: Props) => {
  return <div className={classes.stack}>{children}</div>;
};

export default IconSidebar;
