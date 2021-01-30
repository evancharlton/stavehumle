import { useMemo } from 'react';

type Props = {
  words: string[];
};

const Found = ({ words }: Props) => {
  const cleaned = useMemo(() => {
    return Object.keys(
      words.reduce((acc, word) => ({ ...acc, [word]: true }), {})
    );
  }, [words]);
  return (
    <div>
      {cleaned.map((word) => (
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
