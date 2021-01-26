import { atom, RecoilValue } from 'recoil';

export const centerLetter = atom({
  key: 'game/letters/center',
  default: '',
});

export const outerLetters = atom<
  [string, string, string, string, string, string]
>({
  key: 'game/letters/outer',
  default: ['', '', '', '', '', ''],
});

type RecoilValueType<F extends RecoilValue<unknown>> = F['__tag'][0];

export type State = {
  centerLetter: RecoilValueType<typeof centerLetter>;
  outerLetters: RecoilValueType<typeof outerLetters>;
};
