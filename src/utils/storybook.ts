export type StoryFn = () => React.ReactNode;

export type AugmentedStory = StoryFn;

export const createStory = (
  fn: StoryFn
  // options: StoryOptions = {}
): AugmentedStory => {
  const augmented = fn as AugmentedStory;
  return augmented;
};
