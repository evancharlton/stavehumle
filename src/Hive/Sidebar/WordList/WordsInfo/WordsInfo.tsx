import classes from "./WordsInfo.module.css";
import { useState } from "react";
import { MdHelpOutline as HelpIcon } from "react-icons/md";
import { Modal } from "../../../../spa-components/Modal";

const WordsInfo = () => {
  const [showing, setShowing] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowing(true)}
        className={classes.button}
        aria-label="funnet ord hjelp"
      >
        <HelpIcon />
      </button>
      <Modal
        open={showing}
        title="«Hva er disse ordene?»"
        onClose={() => setShowing(false)}
      >
        <p>
          Ordene som brukes her kommer fra den{" "}
          <a
            href="https://www.nb.no/sprakbanken/ressurskatalog/oai-nb-no-sbr-5/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Norske ordbanken
          </a>
          . Alle ord finnes, men noen ord blir sjelden (eller aldri) sett i det
          virkelige liv.
        </p>
        <p>
          <a
            href="mailto:evancharlton+humle@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Skriv en e-post
          </a>{" "}
          hvis du finner et galt ord 😀
        </p>
      </Modal>
    </>
  );
};

export default WordsInfo;
