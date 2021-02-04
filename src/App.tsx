import './App.css';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Play from './pages/Play';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Play />
        </Route>

        <Route path="/:gameId">
          <Play />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
