import { NewWordInfo, useNewWordFound } from "../../custom-events";
import { useCallback } from "react";
import firebase from "../../sync";

type Props = {
  children: React.ReactNode;
  node: string;
};

const UploadNewLocalWords = ({ children, node }: Props) => {
  const onWordFound = useCallback(
    ({ word, when, source }: NewWordInfo) => {
      if (source !== "local") {
        return;
      }

      firebase
        .database()
        .ref(node)
        .update({
          [word]: when,
        });
    },
    [node],
  );

  useNewWordFound(onWordFound);

  return <>{children}</>;
};

export default UploadNewLocalWords;
