import {
  MdInfoOutline,
  MdLink,
  MdOutlineAccountCircle,
  MdToday,
} from 'react-icons/md';
import {
  Action,
  HamburgerMenu as SpaHamburgerMenu,
} from '../spa-components/HamburgerMenu';
import { useDialog, useShowDialog } from '../dialogs';
import { ShareDialog } from '../spa-components/ShareDialog';
import { useHref, useParams } from 'react-router';
import { useGameId } from '../hooks';

const useCurrentUrl = () => {
  const { lang } = useParams();
  const { gameId } = useGameId();
  const href = useHref(`/${lang}/${gameId}`);

  return [`${window.location.protocol}/`, window.location.host, href].join('/');
};

export const HamburgerMenu = () => {
  const { open, hide, show } = useDialog('hamburger');
  const share = useDialog('share');

  const showDialog = useShowDialog();

  return (
    <SpaHamburgerMenu open={open} onOpen={() => show()} onClose={() => hide()}>
      <Action
        icon={MdLink}
        text="Del puslespill"
        onClick={() => showDialog('share')}
      />
      <ShareDialog
        url={useCurrentUrl()}
        shareText="Prøve å finne alle ordene i idags bikuben!"
        open={share.open}
        onClose={() => share.hide()}
      />
      <div style={{ flex: 1, borderTop: '1px solid #999a' }}></div>
      <Action
        icon={MdToday}
        text="Velg dato"
        onClick={() => showDialog('date')}
      />
      <Action
        icon={MdOutlineAccountCircle}
        text="Brukerkonto"
        onClick={() => showDialog('account')}
      />
      <Action
        icon={MdInfoOutline}
        text="Om Stavehumle"
        onClick={() => showDialog('about')}
      />
    </SpaHamburgerMenu>
  );
};
