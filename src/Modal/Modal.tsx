import ReactDOM from 'react-dom';
import classes from './Modal.module.css';
import { MdClose as Close } from 'react-icons/md';
import { useNoBodyScroll } from '../useNoBodyScroll';
import { useCallback, useEffect } from 'react';

type Props = {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
  contentClassName?: string;
};

const Modal = ({ children, title, onClose, contentClassName }: Props) => {
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

  return ReactDOM.createPortal(
    <div className={classes.modalBackground} onClick={onClose}>
      <div className={classes.modal} onClick={(e) => e.stopPropagation()}>
        <div className={classes.header}>
          <h2>{title}</h2>
          <button onClick={onClose} aria-label="lukk vinduet">
            <Close />
          </button>
        </div>
        <div
          className={[classes.contents, contentClassName]
            .filter(Boolean)
            .join(' ')}
        >
          {children}
        </div>
        <div className={classes.footer}>
          <button onClick={onClose}>Lukk</button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
