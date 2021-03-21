import Hive from 'Hive';
import GameLoader from 'GameLoader';
import { RecoilRoot } from 'recoil';
import { useGameId } from 'hooks';

const Play = () => {
  const { gameHash } = useGameId();
  return (
    <RecoilRoot>
      <RecoilRoot key={gameHash}>
        <GameLoader>
          <Hive />
        </GameLoader>
      </RecoilRoot>
    </RecoilRoot>
  );
};

export default Play;
