import { useCallback } from 'react';
import { atom, useRecoilState, useSetRecoilState } from 'recoil';

type DialogKind = 'hamburger' | 'about' | 'date' | 'account' | 'share';

const dialog = atom<DialogKind | ''>({
  key: 'ui/dialog',
  default: '',
});

export const useShowDialog = () => {
  return useSetRecoilState(dialog);
};

export const useDialog = (which: DialogKind) => {
  const [current, setDialog] = useRecoilState(dialog);
  return {
    open: current === which,
    show: useCallback(() => setDialog(which), [which, setDialog]),
    hide: useCallback(
      () =>
        setDialog((v) => {
          if (v !== which) {
            return v;
          }
          return '';
        }),
      [which, setDialog],
    ),
  };
};
