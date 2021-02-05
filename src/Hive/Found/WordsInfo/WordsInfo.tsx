import classes from './WordsInfo.module.css';
import { useMemo, useState } from 'react';
import { MdHelpOutline as HelpIcon } from 'react-icons/md';
import Modal from 'Modal';

const WordsInfo = () => {
  const [showing, setShowing] = useState(false);

  const modal = useMemo(() => {
    if (!showing) {
      return false;
    }
    return (
      <Modal title="«Hva er disse ordene?»" onClose={() => setShowing(false)}>
        <p>
          Ordene som brukes her kommer fra den{' '}
          <a
            href="https://www.nb.no/sprakbanken/ressurskatalog/oai-nb-no-sbr-5/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Norsk ordbank
          </a>
          . Alle ordene stemmer, men noen ord blir sjelden (eller aldri) sett i
          det virkelige liv.
        </p>
        <p>
          <a
            href="mailto:evancharlton+humle@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Skriv en e-post
          </a>{' '}
          hvis du finner et galt ord 😀
        </p>
      </Modal>
    );
  }, [showing]);

  return (
    <>
      <button onClick={() => setShowing(true)} className={classes.button}>
        <HelpIcon />
      </button>
      {modal}
    </>
  );
};

export default WordsInfo;
