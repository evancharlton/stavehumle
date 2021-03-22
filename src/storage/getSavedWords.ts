import { WordMap } from 'GameLoader/types';

export const getSavedWords = (key: string): WordMap => {
  try {
    const item = localStorage.getItem(key);
    if (item) {
      const saved = JSON.parse(item);
      if (Array.isArray(saved)) {
        // We're about to destructively migrate some data. Let's stash a copy
        // just because I'm scared.
        localStorage.setItem(`backup/${key}`, item);

        const migrated = saved
          .filter((word) => typeof word === 'string')
          .reduce((acc, word, i) => ({ ...acc, [word]: new Date(i) }), {});
        localStorage.setItem(key, JSON.stringify(migrated));
        return getSavedWords(key);
      }
      return Object.entries(saved)
        .filter(([_, date]) => !!date)
        .reduce((acc, [k, v]) => ({ ...acc, [k]: v }), {});
    }
  } catch (ex) {
    // Do nothing
  }

  return {} as WordMap;
};
