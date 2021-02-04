import { useParams } from 'react-router-dom';
import hashcode from './hashcode';
import twoDigits from './twoDigits';

const TODAY = (() => {
  const now = new Date();
  return [now.getFullYear(), now.getMonth() + 1, now.getDate()]
    .map(twoDigits)
    .join('-');
})();

const isProbablyDate = (ymd: unknown[] | null) => {
  if (!ymd) {
    return false;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, ...rest] = ymd;
  if (rest.length !== 3) {
    return false;
  }

  const [year, month, day] = rest.map(Number);
  // Yeah, it's a best-effort thing.
  return year && month >= 1 && month <= 12 && day >= 1 && day <= 31;
};

export const useGameId = () => {
  const { gameId: gameIdParam } = useParams<{ gameId?: string }>();
  const gameId = gameIdParam ?? TODAY;

  const match = gameId.match(/^([0-9]{4})-([0-9]{2})-([0-9]{2})$/);

  return { gameId, gameHash: hashcode(gameId), isDate: isProbablyDate(match) };
};
