export type StoryFn = () => React.ReactNode;

type StoryOptions = {};

export type AugmentedStory = StoryFn & StoryOptions;

export const createStory = (
  fn: StoryFn,
  options: StoryOptions = {}
): AugmentedStory => {
  const augmented = fn as AugmentedStory;
  return augmented;
};
