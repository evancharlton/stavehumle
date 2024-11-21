import { useMemo, useState } from 'react';
import classes from './DatePicker.module.css';
import {
  BsChevronDoubleLeft as BackYear,
  BsChevronDoubleRight as ForwardYear,
  BsChevronLeft as BackMonth,
  BsChevronRight as ForwardMonth,
} from 'react-icons/bs';
import { isProbablyDate } from '../../../hooks';
import twoDigits from '../../../twoDigits';

export type Props = {
  gameId?: string;
  onChange: (gameId: string) => void;
};

const MONTHS = [
  'januar',
  'februar',
  'mars',
  'april',
  'mai',
  'juni',
  'juli',
  'august',
  'september',
  'oktober',
  'november',
  'desember',
];

const DAYS = [
  'm', // mandag
  't', // tirsdag
  'o', // onsdag
  't', // torsdag
  'f', // fredag
  'l', // lørdag
  's', // sondag
];

const DAY_KEYS = [
  'mandag',
  'tirsdag',
  'onsdag',
  'torsdag',
  'fredag',
  'lørdag',
  'sondag',
];

const DatePicker = ({ onChange, gameId = '' }: Props) => {
  const today = new Date();
  const [todayYear, todayMonth, todayDate] = [
    today.getFullYear(),
    today.getMonth(),
    today.getDate(),
  ];

  const currentGameDate = useMemo(() => {
    return isProbablyDate(gameId) ? new Date(gameId) : null;
  }, [gameId]);

  const [year, setYear] = useState((currentGameDate || today).getFullYear());
  const [month, setMonth] = useState((currentGameDate || today).getMonth());

  const changeYear = (delta: 1 | -1) => () => {
    setYear((y) => y + delta);
  };

  const changeMonth = (delta: 1 | -1) => () => {
    setMonth((m) => {
      const added = m + delta;
      if (added < 0) {
        setYear((y) => y - 1);
        return 11;
      }
      if (added >= 12) {
        setYear((y) => y + 1);
        return 0;
      }
      return added;
    });
  };

  const monthGrid = useMemo(() => {
    const start = new Date(year, month, 1);
    const dayOfWeek = start.getDay();

    const cells = [];
    for (let i = 0; i < 7; i += 1) {
      cells.push(
        <div className={classes.dayHeader} key={`day-${DAY_KEYS[i]}`}>
          {DAYS[i]}
        </div>,
      );
    }

    for (let i = 1; i < dayOfWeek; i += 1) {
      cells.push(
        <div key={`filler-${i}`} className={classes.filler}>
          &nbsp;
        </div>,
      );
    }

    const daysInMonth = new Date(year, month + 1, 0).getDate();
    for (let i = 1; i <= daysInMonth; i += 1) {
      const isToday =
        year === todayYear && month === todayMonth && i === todayDate;

      const isCurrent =
        currentGameDate &&
        year === currentGameDate.getFullYear() &&
        month === currentGameDate.getMonth() &&
        i === currentGameDate.getDate();

      const classNames = [classes.dateButton];
      if (isToday) {
        classNames.push(classes.todayButton);
      }
      if (isCurrent) {
        classNames.push(classes.currentButton);
      }

      const ariaLabel = `velg ${year}-${month}-${i}`;

      cells.push(
        <button
          key={`date-${i}`}
          className={classNames.join(' ')}
          onClick={() => {
            onChange(`${year}-${twoDigits(month + 1)}-${twoDigits(i)}`);
          }}
          aria-label={ariaLabel}
        >
          {i}
        </button>,
      );
    }

    return <div className={classes.monthGrid}>{cells}</div>;
  }, [
    year,
    month,
    onChange,
    currentGameDate,
    todayYear,
    todayMonth,
    todayDate,
  ]);

  return (
    <div>
      <div className={classes.header}>
        <button onClick={changeYear(-1)} aria-label="tilbake ett år">
          <BackYear />
        </button>
        <button onClick={changeMonth(-1)} aria-label="tilbake en måned">
          <BackMonth />
        </button>
        <button
          className={classes.center}
          onClick={() => {
            const now = new Date();
            setYear(now.getFullYear());
            setMonth(now.getMonth());
          }}
        >
          <span className={classes.year}>{year}</span>
          &nbsp;/&nbsp;
          <span className={classes.month}>{MONTHS[month]}</span>
        </button>
        <button onClick={changeMonth(1)} aria-label="frem en måned">
          <ForwardMonth />
        </button>
        <button onClick={changeYear(1)} aria-label="frem ett år">
          <ForwardYear />
        </button>
      </div>
      {monthGrid}
    </div>
  );
};

export default DatePicker;
