import { useEffect } from 'react';

const FOUND_WORD = 'found-word';

export type NewWordInfo = {
  word: string;
  when: Date;
  source: 'local' | 'remote';
};

export class FoundWordEvent extends CustomEvent<NewWordInfo> {
  constructor(word: string, when: Date, source: NewWordInfo['source']) {
    super(FOUND_WORD, {
      detail: { word, when, source },
    });
  }
}

export type NewWordCallback = (wordInfo: NewWordInfo) => void;

export const useNewWordFound = (callback: (wordInfo: NewWordInfo) => void) => {
  useEffect(() => {
    const wrapper = (e: Event) => {
      const { detail: info } = e as CustomEvent<NewWordInfo>;
      callback(info);
    };

    window.addEventListener(FOUND_WORD, wrapper);
    return () => {
      window.removeEventListener(FOUND_WORD, wrapper);
    };
  }, [callback]);
};
