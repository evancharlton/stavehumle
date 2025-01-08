import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { jsonFetch } from "../api";
import { useGameId } from "../hooks";
import { gamePuzzleId } from "./recoil";
import { useParams } from "react-router";

type OuterLetters = [string, string, string, string, string, string];

export const useLoadLetters = () => {
  const { lang } = useParams();
  const { gameHash } = useGameId();
  const [error, setError] = useState<Error | undefined>();
  const setPuzzleId = useSetRecoilState(gamePuzzleId);

  useEffect(() => {
    jsonFetch(`https://lister.evanc.no/stavehumle/words/${lang}/options.json`)
      .then((options) => options[gameHash % options.length])
      .then((option: string) => {
        const letters = option.split("");
        const centerLetter = letters[gameHash % letters.length];
        const outerLetters = letters.filter(
          (letter) => letter !== centerLetter,
        ) as OuterLetters;
        return [centerLetter, ...outerLetters.sort()].join("");
      })
      .then((puzzleId) => setPuzzleId(puzzleId))
      .catch((e) => {
        console.error(e);
        setError(e);
      });
  }, [gameHash, lang, setPuzzleId]);

  return { error };
};
