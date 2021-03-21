import Hive from 'Hive';
import GameLoader from 'GameLoader';
import { RecoilRoot } from 'recoil';

const Play = () => {
  return (
    <RecoilRoot>
      <GameLoader>
        <Hive />
      </GameLoader>
    </RecoilRoot>
  );
};

export default Play;
