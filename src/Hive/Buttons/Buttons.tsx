import {
  MdKeyboardBackspace as Backspace,
  MdRefresh as Shuffle,
  MdKeyboardReturn as Enter,
} from "react-icons/md";
import classes from "./Buttons.module.css";
import { SVGProps, useCallback, useEffect, useRef, useState } from "react";
import { useLetters } from "../../GameLoader";
import { useGame } from "../hooks";
import useShuffledLetters from "./useShuffledLetters";

const L = 15;
const W = 100;

const dx = L * Math.sin(60 * (Math.PI / 180));
const dy = L * Math.sin(30 * (Math.PI / 180));

const Hexagon = ({
  x,
  y,
  onClick,
  letter,
  ...props
}: { x: number; y: number; letter: string } & Required<
  Pick<SVGProps<HTMLAnchorElement>, "onClick">
> &
  Omit<SVGProps<HTMLAnchorElement>, "onClick">) => {
  const hexagon = useCallback((x: number, y: number) => {
    return [
      `M ${x},${y - (L / 2 + dy)}`,
      `l ${dx},${dy}`,
      `l ${0},${L}`,
      `l ${-dx},${dy}`,
      `l ${-dx},${-dy}`,
      `l ${0},${-L}`,
      `Z`,
    ].join(" ");
  }, []);
  return (
    <a
      data-letter={letter}
      href={window.location.href}
      onClick={(e) => {
        e.preventDefault();
        onClick?.(e);
      }}
      {...props}
    >
      <path d={hexagon(x, y)} />
      <text x={x} y={y}>
        {letter}
      </text>
    </a>
  );
};

const Buttons = () => {
  const { onGuess } = useGame();

  const { all, centerLetter, outerLetters } = useLetters();
  const [guess, setGuess] = useState("");
  const { shuffled, reshuffle } = useShuffledLetters();

  const guessRef = useRef("");
  guessRef.current = guess;

  useEffect(() => {
    guessRef.current = "";
    setGuess("");
  }, [outerLetters, centerLetter]);

  const makeGuess = useCallback(() => {
    onGuess(guessRef.current);
    setGuess("");
  }, [onGuess, guessRef]);

  const onLetterClick = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      const button = event.currentTarget;
      const letter = button.getAttribute("data-letter");
      setGuess((g) => `${g}${letter}`);
    },
    [setGuess],
  );

  const onBackspace = useCallback(() => {
    setGuess((g) => g.substr(0, g.length - 1));
  }, [setGuess]);

  const onKeyPress = useCallback(
    (e: KeyboardEvent) => {
      const { key } = e;

      if (key === "Backspace") {
        setGuess((g) => g.substring(0, g.length - 1));
        return;
      }

      if (key === " ") {
        reshuffle();
        e.preventDefault();
        return;
      }

      if (key === "Enter") {
        makeGuess();
      }

      if (!all.includes(key.toLocaleLowerCase())) {
        return;
      }

      setGuess((g) => `${g}${key}`);
    },
    [all, makeGuess, reshuffle],
  );

  useEffect(() => {
    document.addEventListener("keydown", onKeyPress);
    return () => {
      document.removeEventListener("keydown", onKeyPress);
    };
  }, [onKeyPress]);

  return (
    <div className={classes.container}>
      <div className={classes.guess}>{guess || <>&nbsp;</>}</div>
      <div className={classes.stack}>
        <svg
          className={classes.honeycomb}
          style={{ gridArea: "cell", minWidth: 300 }}
          viewBox={`0 0 ${W} ${W}`}
        >
          <Hexagon
            letter={centerLetter}
            onClick={onLetterClick}
            x={W / 2}
            y={W / 2}
            className={classes.center}
          />
          <Hexagon
            letter={shuffled[0]}
            onClick={onLetterClick}
            x={W / 2 - dx}
            y={W / 2 - (L / 2 + dy + L / 2)}
          />
          <Hexagon
            letter={shuffled[1]}
            onClick={onLetterClick}
            x={W / 2 + dx}
            y={W / 2 - (L / 2 + dy + L / 2)}
          />
          <Hexagon
            letter={shuffled[2]}
            onClick={onLetterClick}
            x={W / 2 - (dx + dx)}
            y={W / 2}
          />
          <Hexagon
            letter={shuffled[3]}
            onClick={onLetterClick}
            x={W / 2 + (dx + dx)}
            y={W / 2}
          />
          <Hexagon
            letter={shuffled[4]}
            onClick={onLetterClick}
            x={W / 2 - dx}
            y={W / 2 + (L / 2 + dy + L / 2)}
          />
          <Hexagon
            letter={shuffled[5]}
            onClick={onLetterClick}
            x={W / 2 + dx}
            y={W / 2 + (L / 2 + dy + L / 2)}
          />
        </svg>
      </div>
      <div className={classes.controls}>
        <button onClick={onBackspace} aria-label="baksiden">
          <Backspace />
        </button>
        <button onClick={reshuffle} aria-label="tilfeldig rekkefølge">
          <Shuffle />
        </button>
        <button onClick={makeGuess} aria-label="send inn">
          <Enter />
        </button>
      </div>
    </div>
  );
};

export default Buttons;
