import { useParams } from 'react-router-dom';
import hashcode from './hashcode';

const twoDigits = (v: number) => {
  if (v < 10) {
    return `0${v}`;
  }
  return v;
};

const TODAY = (() => {
  const now = new Date();
  return [now.getFullYear(), now.getMonth() + 1, now.getDate()]
    .map(twoDigits)
    .join('-');
})();

export const useGameId = () => {
  const { gameId: gameIdParam } = useParams<{ gameId?: string }>();
  const gameId = gameIdParam ?? TODAY;
  return { gameId, gameHash: hashcode(gameId) };
};
