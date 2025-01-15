import "./App.css";
import { HashRouter as Router, Route, Routes, Outlet } from "react-router";
import { lazy, Suspense } from "react";
import PwaContainer from "./spa-components/PwaContainer";
import { Loader } from "./spa-components/Loader";
import { LanguageProvider } from "./spa-components/LanguageSelector";

const LazyGameLoader = lazy(() => import("./GameLoader"));
const LazyHive = lazy(() => import("./Hive"));
const LazyPage = lazy(() => import("./Page"));

const App = () => (
  <PwaContainer appId="stavehumle">
    <Router>
      <Routes>
        <Route path="/" element={<LazyPage />}>
          <Route
            path=""
            element={
              <Suspense fallback={<Loader />}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    flex: 1,
                  }}
                >
                  <LanguageProvider />
                </div>
              </Suspense>
            }
          />
          <Route
            path=":lang"
            element={
              <LanguageProvider>
                <Suspense fallback={<Loader />}>
                  <LazyGameLoader>
                    <Outlet />
                  </LazyGameLoader>
                </Suspense>
              </LanguageProvider>
            }
          >
            <Route
              path=""
              element={
                <Suspense fallback={<Loader />}>
                  <LazyHive />
                </Suspense>
              }
            />
            <Route
              path=":gameId"
              element={
                <Suspense fallback={<Loader />}>
                  <LazyHive />
                </Suspense>
              }
            />
          </Route>
        </Route>
      </Routes>
    </Router>
  </PwaContainer>
);

export default App;
