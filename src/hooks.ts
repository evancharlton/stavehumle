import { useParams } from 'react-router-dom';
import hashCode from './hashCode';
import twoDigits from './twoDigits';

export const isProbablyDate = (gameId: string) => {
  if (!gameId) {
    return false;
  }

  const ymd: unknown[] | null = gameId.match(
    /^([0-9]{4})-([0-9]{2})-([0-9]{2})$/,
  );

  if (!ymd) {
    return false;
  }

  const rest = ymd.slice(1);
  if (rest.length !== 3) {
    return false;
  }

  const [year, month, day] = rest.map(Number);

  // Yeah, it's a best-effort thing.
  return year && month >= 1 && month <= 12 && day >= 1 && day <= 31;
};

export const useGameId = () => {
  const { gameId: gameIdParam } = useParams<{ gameId?: string }>();
  let gameId = gameIdParam;
  if (!gameId) {
    // Default it to "today" (whenever this is being called)
    const now = new Date();
    gameId = [now.getFullYear(), now.getMonth() + 1, now.getDate()]
      .map(twoDigits)
      .join('-');
  }

  const gameHash = hashCode(
    // Note: we reverse the game ID here because otherwise, sequential dates
    // will only have hashCodes that differ by one value. Instead, we want to
    // put the least-significant bit in the beginning to lead to more entropy.
    // Of course, it's not real entropy but that's not really what we want here.
    gameId.split('').reverse().join(''),
  );

  return { gameId, gameHash };
};
