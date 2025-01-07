import { useEffect } from "react";
import firebase from "../../sync";
import { useWords } from "../useWords";
import { FoundWordEvent } from "../../custom-events";
import { WordMap } from "../types";

type Props2 = {
  children: React.ReactNode;
  node: string;
};

const DownloadInitialRemoteWords = ({ children, node }: Props2) => {
  const { words: validWords } = useWords();

  useEffect(() => {
    firebase
      .database()
      .ref(node)
      .once("value")
      .then((snap) => {
        if (!snap.exists()) {
          return;
        }

        const wordMap = validWords.reduce<Record<string, true>>(
          (acc, word) => ({ ...acc, [word]: true }),
          {},
        );
        const newWords = {} as WordMap;
        const remoteWords = snap.val() as Record<string, string>;
        Object.entries(remoteWords).forEach(([word, dateStr]) => {
          if (!wordMap[word]) {
            console.warn(`"${word}" is not a recognized word`);
            return;
          }

          const timestamp = Date.parse(dateStr);
          if (timestamp === undefined) {
            console.warn(`"${word}" as an invalid date (${dateStr})`);
            return;
          }

          newWords[word] = new Date(timestamp);
        });

        Object.entries(newWords)
          .sort(([_wordA, whenA], [_wordB, whenB]) => {
            return +whenA - +whenB;
          })
          .forEach(([word, when]) => {
            window.dispatchEvent(new FoundWordEvent(word, when, "remote"));
          });
      });
  }, [node, validWords]);

  return <>{children}</>;
};

export default DownloadInitialRemoteWords;
