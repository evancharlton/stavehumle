import './App.css';
import { Outlet, useParams } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import classes from './App.module.css';
import Header from './Header';

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

export default Page;
