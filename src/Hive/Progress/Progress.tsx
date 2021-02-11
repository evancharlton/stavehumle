import { useWords } from 'WordProvider';
import { useGame, useScore } from '../hooks';
import classes from './Progress.module.css';
import { MdHelpOutline as Help } from 'react-icons/md';
import { useMemo, useState } from 'react';
import Modal from 'Modal';

const Progress = () => {
  const { found } = useGame();
  const { words } = useWords();

  const { score: currentPoints } = useScore(found);
  const { score: totalPoints } = useScore(words);

  const [showing, setShowing] = useState(false);

  const modal = useMemo(() => {
    if (!showing) {
      return null;
    }

    return (
      <Modal title="Poeng" onClose={() => setShowing(false)}>
        <p>
          Poengene beregnes ut fra hvor mange ord som blir funnet. Hvert ord har
          ulike poengsummer.
        </p>
        <ul>
          <li>
            ord på fire bokstaver er verdt <strong>ett poeng</strong>
          </li>
          <li>
            hver bokstave etter fire er verdt <strong>ett ekstra poeng</strong>
          </li>
          <li>
            ord som bruker alle bokstavenve minst en gang (et pangram) gir{' '}
            <strong>syv ekstra poeng</strong>
          </li>
        </ul>
        <h3>Eksempel</h3>
        <p>
          H&nbsp;I&nbsp;K&nbsp;L&nbsp;O&nbsp;S&nbsp;<strong>T</strong>
        </p>
        <ul>
          <li>
            <strong>hist</strong> er 4 poeng
          </li>
          <li>
            <strong>hittil</strong> er 6 poeng
          </li>
          <li>
            <strong>holistisk</strong> er (9 + 7) = 16 poeng
          </li>
        </ul>
      </Modal>
    );
  }, [showing]);

  const percent = (100 * currentPoints) / totalPoints;
  const genius = percent >= 70;

  return (
    <div className={classes.container}>
      <div className={classes.bars}>
        <span className={classes.currentPoints}>{currentPoints}</span>
        <div
          className={[classes.progressBarContainer, genius && classes.genius]
            .filter(Boolean)
            .join(' ')}
          title={`${currentPoints} av ${totalPoints} poeng`}
          id="points-progress"
        >
          <div
            className={classes.progress}
            style={{
              width: `${percent.toFixed(2)}%`,
            }}
          />
        </div>
        <span className={classes.totalPoints}>{totalPoints}</span>
      </div>
      <button
        onClick={() => setShowing(true)}
        className={classes.help}
        aria-label="poeng hjelp"
      >
        <Help />
      </button>
      {modal}
    </div>
  );
};

export default Progress;
