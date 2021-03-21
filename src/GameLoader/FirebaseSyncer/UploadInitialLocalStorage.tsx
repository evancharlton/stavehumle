import { useFoundWords } from 'GameLoader/useFoundWords';
import { useEffect } from 'react';
import firebase from 'sync';

type Props2 = {
  children: React.ReactNode;
  node: string;
};

const UploadInitialLocalStorage = ({ children, node }: Props2) => {
  const { found } = useFoundWords();

  useEffect(() => {
    if (Object.keys(found).length === 0) {
      return;
    }

    firebase.database().ref(node).update(found);
  }, [found, node]);

  return <>{children}</>;
};

export default UploadInitialLocalStorage;
