import './App.css';
import { Outlet, useParams } from 'react-router';
import { RecoilRoot } from 'recoil';
import classes from './App.module.css';
import { Header } from './spa-components/Header';
import CalendarButton from './Header/CalendarButton';
import UserDialog from './Header/UserDialog';
import InfoButton from './Header/InfoButton';

const Page = () => {
  const { lang, gameHash } = useParams();
  return (
    <div className={classes.container}>
      <RecoilRoot key={[lang ?? '<lang>', gameHash ?? '<game-hash>'].join('/')}>
        <Header title="Stavehumle" logo="/logo.svg">
          <>
            {lang && <CalendarButton />}
            {lang && <UserDialog />}
            <InfoButton />
          </>
        </Header>
        <Outlet />
      </RecoilRoot>
    </div>
  );
};

export default Page;
