import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const twoDigits = (v: number) => {
  if (v < 10) {
    return `0${v}`;
  }
  return v;
};

const Start = () => {
  const history = useHistory();

  useEffect(() => {
    const now = new Date();
    history.replace(
      `/${[now.getFullYear(), now.getMonth() + 1, now.getDate()]
        .map(twoDigits)
        .join('-')}`
    );
  }, [history]);

  return null;
};

export default Start;
