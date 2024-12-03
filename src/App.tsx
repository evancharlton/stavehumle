import './App.css';
import { HashRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Loading from './Loading';

const LazyGameLoader = lazy(() => import('./GameLoader'));
const LazyHive = lazy(() => import('./Hive'));
const LazyLanguageSelector = lazy(() => import('./LanguageSelector'));
const LazyPage = lazy(() => import('./Page'));

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LazyPage />}>
        <Route
          path=""
          element={
            <Suspense fallback={<Loading />}>
              <LazyLanguageSelector />
            </Suspense>
          }
        />
        <Route
          path=":lang"
          element={
            <Suspense fallback={<Loading />}>
              <LazyGameLoader>
                <Outlet />
              </LazyGameLoader>
            </Suspense>
          }
        >
          <Route
            path=""
            element={
              <Suspense fallback={<Loading />}>
                <LazyHive />
              </Suspense>
            }
          />
          <Route
            path=":gameId"
            element={
              <Suspense fallback={<Loading />}>
                <LazyHive />
              </Suspense>
            }
          />
        </Route>
      </Route>
    </Routes>
  </Router>
);

export default App;
