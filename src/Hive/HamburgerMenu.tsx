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

export const HamburgerMenu = () => {
  const { open, hide, show } = useDialog('hamburger');
  const showDialog = useShowDialog();

  return (
    <SpaHamburgerMenu open={open} onOpen={() => show()} onClose={() => hide()}>
      <Action
        icon={MdLink}
        text="Del puslespill"
        onClick={() => showDialog('share')}
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
