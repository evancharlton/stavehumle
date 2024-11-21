import { useMemo, useState } from 'react';
import classes from './DeleteAccountButton.module.css';

type Props = {
  onDelete: () => void;
};

const DeleteAccountButton = ({ onDelete }: Props) => {
  const [state, setState] = useState<'initial' | 'confirming'>('initial');

  const contents = useMemo(() => {
    if (state === 'initial') {
      return (
        <div className={classes.buttons}>
          <button
            className={classes.deleteAccount}
            onClick={() => setState('confirming')}
          >
            Slett kontoen min
          </button>
        </div>
      );
    }

    if (state === 'confirming') {
      return (
        <>
          <p>
            Er du sikker? Detter er <strong>permanent og irreversibelt</strong>
          </p>

          <div className={classes.buttons}>
            <button
              className={classes.cancelButton}
              onClick={() => setState('initial')}
            >
              Glem det!
            </button>
            <button
              className={classes.confirmButton}
              onClick={() => onDelete()}
            >
              Jeg er sikker — slett alt
            </button>
          </div>
        </>
      );
    }
  }, [state, onDelete]);

  return <div className={classes.container}>{contents}</div>;
};

export default DeleteAccountButton;
