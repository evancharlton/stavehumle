import { useLetters } from '../../../LettersProvider';
import classes from '../Grid.module.css';

type Props = {
  words: string[];
  range: [number, number];
};

const EMPTY = <span className={classes.filler}>&ndash;</span>;

const WordGrid = ({ words, range: [shortest, longest] }: Props) => {
  const { all } = useLetters();

  const columns = [
    <th key="blank">&nbsp;</th>, //
  ];
  const totals = [];
  for (let i = shortest; i <= longest; i += 1) {
    columns.push(<th key={i}>{i}</th>);

    const count = words.filter((word) => word.length === i).length;
    totals.push(<td key={`total @ ${i}`}>{count || EMPTY}</td>);
  }
  columns.push(<th key="column-sum">Σ</th>);

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

    body.push(<tr key={`row-${letter}`}>{cells}</tr>);
  }

  body.push(
    <tr key="row-totals" className={classes.border}>
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

export default WordGrid;
