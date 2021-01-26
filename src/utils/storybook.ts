import { State } from '../state';

export type StoryFn = () => React.ReactNode;

type StoryOptions = {
  recoilState?: Partial<State>;
};

export type AugmentedStory = StoryFn & StoryOptions;

export const createStory = (
  fn: StoryFn,
  options: StoryOptions = {}
): AugmentedStory => {
  const augmented = fn as AugmentedStory;
  augmented.recoilState = options.recoilState;
  return augmented;
};
