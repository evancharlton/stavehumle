import Grid from "./Grid";
import Progress from "./Progress";
import WordList from "./WordList";
import classes from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={classes.column}>
      <div className={classes.header}>
        <Progress />
      </div>
      <Grid />
      <WordList />
    </div>
  );
};

export default Sidebar;
