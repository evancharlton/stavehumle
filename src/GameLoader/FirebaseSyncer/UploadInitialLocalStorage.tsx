import { useEffect } from 'react';
import firebase, { useLogin } from 'sync';
import { getSavedWords } from 'storage';

type Props2 = {
  children: React.ReactNode;
  node: string;
};

const UploadInitialLocalStorage = ({ children, node }: Props2) => {
  const { path } = useLogin();

  useEffect(() => {
    const values: Record<string, object | string | null> = {};
    for (let i = 0; i < localStorage.length; i += 1) {
      const key = localStorage.key(i);
      if (!key) {
        continue;
      }

      if (key.startsWith('backup')) {
        continue;
      }

      if (key.includes('/saved/')) {
        const words = getSavedWords(key);
        if (Object.keys(words).length === 0) {
          continue;
        }

        values[key] = words;
      }

      if (key.includes('/revealed/')) {
        values[key] = localStorage.getItem(key);
      }
    }
    console.log(Object.keys(values));

    if (Object.keys(values).length === 0) {
      return;
    }

    firebase.database().ref(path).update(values);
  }, [path]);

  return <>{children}</>;
};

export default UploadInitialLocalStorage;
