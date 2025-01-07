import { useRecoilValue } from "recoil";
import { gamePuzzleId } from "./recoil";
import { useParams } from "react-router";

export const usePuzzlePath = (key: string = "saved") => {
  const { lang } = useParams();
  const puzzleId = useRecoilValue(gamePuzzleId);
  return ["stavehumle", lang, key, puzzleId].join("/");
};
