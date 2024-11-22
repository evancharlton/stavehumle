import { useFoundWords } from '../../../../GameLoader';
import isPangram from '../../../../isPangram';
import classes from './Word.module.css';

type Props = {
  children: string;
};

const blurLink = (e: React.MouseEvent<HTMLElement>) => e.currentTarget.blur();

const Word = ({ children: word }: Props) => {
  const { found } = useFoundWords();

  const revealed = !found[word];
  const pangram = isPangram(word);

  return (
    <a
      className={[
        classes.word,
        revealed && classes.revealed,
        pangram && classes.pangram,
      ]
        .filter(Boolean)
        .join(' ')}
      key={word}
      href={`https://naob.no/søk?q=${word}`}
      target="_blank"
      rel="noopener noreferrer"
      onClick={blurLink}
    >
      {word}
    </a>
  );
};

export default Word;
