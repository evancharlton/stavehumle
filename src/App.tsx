import './App.css';
import {
  HashRouter as Router,
  Route,
  Routes,
  Outlet,
  useParams,
} from 'react-router-dom';
import LanguageSelector from './LanguageSelector';
import { RecoilRoot } from 'recoil';
import classes from './App.module.css';
import Header from './Header';
import GameLoader from './GameLoader';
import Hive from './Hive';

const Page = () => {
  const params = useParams();
  return (
    <div className={classes.container}>
      <RecoilRoot
        key={[params.lang ?? '<lang>', params.gameHash ?? '<game-hash>'].join(
          '/',
        )}
      >
        <Header />
        <Outlet />
      </RecoilRoot>
    </div>
  );
};

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Page />}>
        <Route path="" element={<LanguageSelector />} />
        <Route
          path=":lang"
          element={
            <GameLoader>
              <Outlet />
            </GameLoader>
          }
        >
          <Route path="" element={<Hive />} />
          <Route path=":gameId" element={<Hive />} />
        </Route>
      </Route>
    </Routes>
  </Router>
);

export default App;
