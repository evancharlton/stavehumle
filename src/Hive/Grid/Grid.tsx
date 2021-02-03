import { useLetters } from '../../LettersProvider';
import { useWords } from '../../WordProvider';
import classes from './Grid.module.css';

const EMPTY = <span className={classes.filler}>&ndash;</span>;

const Grid = () => {
  const { words } = useWords();
  const { all } = useLetters();

  const [shortest, longest] = words.reduce(
    ([min, max], word) => {
      return [Math.min(min, word.length), Math.max(max, word.length)];
    },
    [1000, 3]
  );

  const columns = [
    <th>&nbsp;</th>, //
  ];
  const totals = [];
  for (let i = shortest; i <= longest; i += 1) {
    columns.push(<th key={i}>{i}</th>);

    const count = words.filter((word) => word.length === i).length;
    totals.push(<td key={`total @ ${i}`}>{count || EMPTY}</td>);
  }
  columns.push(<th>Σ</th>);

  const body = [];
  for (let i = 0; i < all.length; i += 1) {
    const letter = all[i];
    const matchingWords = words.filter((word) => word[0] === letter);

    const cells = [
      <td key={letter} className={[classes.border, classes.letter].join(' ')}>
        {letter}
      </td>,
    ];
    for (let i = shortest; i <= longest; i += 1) {
      const matchingLength = matchingWords.filter((word) => word.length === i)
        .length;
      cells.push(<td key={`${letter} @ ${i}`}>{matchingLength || EMPTY}</td>);
    }
    cells.push(
      <td key={`${letter} @ total`} className={classes.border}>
        {matchingWords.length || EMPTY}
      </td>
    );

    body.push(<tr>{cells}</tr>);
  }

  body.push(
    <tr className={classes.border}>
      <td>Σ</td>
      {totals}
      <td>{words.length}</td>
    </tr>
  );

  return (
    <table className={classes.grid}>
      <thead>
        <tr className={classes.border}>{columns}</tr>
      </thead>
      <tbody>{body}</tbody>
    </table>
  );
};

export default Grid;
