import './App.css';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Start from './pages/Start';
import Play from './pages/Play';

const App = () => {
  return (
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
  );
};

export default App;
