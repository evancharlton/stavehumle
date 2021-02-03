import classes from './Modal.module.css';
import { MdClose as Close } from 'react-icons/md';
import { useEffect, useRef } from 'react';

type Props = {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
};

const Modal = ({ children, title, onClose }: Props) => {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!closeRef.current) {
      return;
    }
    closeRef.current.focus();
  }, [closeRef]);

  return (
    <div className={classes.modalBackground}>
      <div className={classes.modal}>
        <div className={classes.header}>
          <h2>{title}</h2>
          <button onClick={onClose} ref={closeRef}>
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
