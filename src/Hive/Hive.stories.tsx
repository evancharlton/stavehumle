import { RecoilRoot } from 'recoil';
import Hive from './Hive';
import { AugmentedStory, createStory } from '../utils/storybook';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Hive',
  decorators: [
    (story: AugmentedStory) => (
      <RecoilRoot initializeState={() => story.recoilState}>
        {story()}
      </RecoilRoot>
    ),
  ],
};

export const NoLetters = createStory(() => {
  return <Hive />;
});

export const OnlyCenterLetter = createStory(
  () => {
    return <Hive />;
  },
  {
    recoilState: {
      centerLetter: 'A',
    },
  }
);

export const AllLetters = createStory(
  () => {
    return <Hive />;
  },
  {
    recoilState: {
      centerLetter: 'A',
      outerLetters: ['B', 'C', 'D', 'E', 'F', 'G'],
    },
  }
);
