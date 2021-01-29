import Hive from './Hive';
import './App.css';
import { RecoilRoot } from 'recoil';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Start from './pages/Start';
import Play from './pages/Play';

const App = () => {
  return (
    <RecoilRoot>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Start />
          </Route>

          <Route path="/:gameId">
            <Play />
          </Route>
        </Switch>
      </Router>
    </RecoilRoot>
  );
};

export default App;
