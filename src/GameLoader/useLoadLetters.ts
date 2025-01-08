import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { useGameId } from "../hooks";
import { gamePuzzleId } from "./recoil";
import { useLanguageData } from "../spa-components/DataProvider";

type OuterLetters = [string, string, string, string, string, string];

export const useLoadLetters = () => {
  const { gameHash } = useGameId();
  const setPuzzleId = useSetRecoilState(gamePuzzleId);

  const { data: options, error } =
    useLanguageData<string[]>("words/options.json");

  useEffect(() => {
    if (!options?.length) {
      return;
    }

    const option = options[gameHash % options.length];

    const letters = option.split("");
    const centerLetter = letters[gameHash % letters.length];
    const outerLetters = letters.filter(
      (letter) => letter !== centerLetter,
    ) as OuterLetters;
    const puzzleId = [centerLetter, ...outerLetters.sort()].join("");
    setPuzzleId(puzzleId);
  }, [gameHash, options, setPuzzleId]);

  return { error };
};
