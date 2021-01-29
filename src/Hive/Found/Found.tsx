type Props = {
  words: string[];
};

const Found = ({ words }: Props) => {
  return (
    <div>
      {words.map((word) => (
        <div key={word}>
          <a
            href={`https://naob.no/s%C3%B8k/${encodeURIComponent(word)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {word}
          </a>
        </div>
      ))}
    </div>
  );
};

export default Found;
