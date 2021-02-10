import classes from './Word.module.css';

type Props = {
  children: string;
  revealed?: boolean;
};

const Word = ({ children: word, revealed = false }: Props) => {
  return (
    <a
      className={[classes.word, revealed && classes.revealed]
        .filter(Boolean)
        .join(' ')}
      key={word}
      href={`https://naob.no/s%C3%B8k/${encodeURIComponent(word)}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {word}
    </a>
  );
};

export default Word;
