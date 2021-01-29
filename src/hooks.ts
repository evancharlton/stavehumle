import { useParams } from 'react-router-dom';
import hashcode from './hashcode';

export const useGameId = () => {
  const { gameId } = useParams<{ gameId: string }>();
  return { gameId, gameHash: hashcode(gameId) };
};
