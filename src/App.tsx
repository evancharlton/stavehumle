import './App.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Play from './pages/Play';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Play />} />
        <Route path="/:gameId" element={<Play />} />
      </Routes>
    </Router>
  );
};

export default App;
