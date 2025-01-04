import './App.css';
import { Outlet, useParams } from 'react-router';
import { RecoilRoot } from 'recoil';
import classes from './App.module.css';
import { Header } from './spa-components/Header';
import InfoButton from './Header/InfoButton';
import { InfoDialog } from './Header/InfoDialog';

const Page = () => {
  const { lang, gameHash } = useParams();
  return (
    <div className={classes.container}>
      <RecoilRoot key={[lang ?? '<lang>', gameHash ?? '<game-hash>'].join('/')}>
        <Header title="Stavehumle" logo="/logo.svg">
          <InfoButton />
        </Header>
        <Outlet />
        <InfoDialog />
      </RecoilRoot>
    </div>
  );
};

export default Page;
