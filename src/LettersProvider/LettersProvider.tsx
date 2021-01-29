import { createContext, useEffect, useState } from 'react';
import { jsonFetch } from '../api';
import { useGameId } from '../hooks';

type Props = {
  children: React.ReactNode;
};

type ContextType = {
  centerLetter: string;
  outerLetters: [string, string, string, string, string, string];
  all: string;
};

export const Context = createContext<ContextType>({
  centerLetter: '',
  outerLetters: ['', '', '', '', '', ''],
  all: '',
});

const LettersProvider = ({ children }: Props) => {
  const { gameHash } = useGameId();
  const [option, setOption] = useState('');
  const [error, setError] = useState<Error | undefined>();

  useEffect(() => {
    jsonFetch(`${process.env.PUBLIC_URL}/words/options.json`)
      .then((options) => options[gameHash % options.length])
      .then(setOption)
      .catch(setError);
  }, [gameHash]);

  if (error) {
    return <div>Error!</div>;
  }

  if (!option) {
    return <div>Loading ...</div>;
  }

  const letters = option.split('');
  const centerLetter = letters[gameHash % letters.length];
  const outerLetters = letters.filter(
    (letter) => letter != centerLetter
  ) as ContextType['outerLetters'];

  return (
    <Context.Provider value={{ centerLetter, outerLetters, all: option }}>
      {children}
    </Context.Provider>
  );
};

export default LettersProvider;
