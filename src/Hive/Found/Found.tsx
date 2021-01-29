type Props = {
  words: string[];
};

const Found = ({ words }: Props) => {
  return (
    <div>
      {words.map((word) => (
        <div key={word}>{word}</div>
      ))}
    </div>
  );
};

export default Found;
