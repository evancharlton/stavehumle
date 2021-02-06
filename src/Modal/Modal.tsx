import classes from './Modal.module.css';
import { MdClose as Close } from 'react-icons/md';
import { useNoBodyScroll } from '../useNoBodyScroll';
import { useCallback, useEffect } from 'react';

type Props = {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
};

const Modal = ({ children, title, onClose }: Props) => {
  useNoBodyScroll();

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [onKeyDown]);

  return (
    <div className={classes.modalBackground} onClick={onClose}>
      <div className={classes.modal} onClick={(e) => e.stopPropagation()}>
        <div className={classes.header}>
          <h2>{title}</h2>
          <button onClick={onClose}>
            <Close />
          </button>
        </div>
        <div className={classes.contents}>{children}</div>
        <div className={classes.footer}>
          <button onClick={onClose}>Lukk</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
