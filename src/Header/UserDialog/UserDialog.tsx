import { useCallback, useEffect, useState } from "react";
import { FaGoogle as GoogleIcon, FaGithub as GithubIcon } from "react-icons/fa";
import firebase, { useLogin } from "../../sync";
import classes from "./UserDialog.module.css";
import DeleteAccountButton from "./DeleteAccountButton";
import { Modal } from "../../spa-components/Modal";
import { useDialog } from "../../dialogs";

// This takes some more work; flag it out for now
const ENABLE_DELETE_ACCOUNT = false;

const UserDialog = () => {
  const { userId } = useLogin();
  const [signingIn, setSigningIn] = useState(false);
  const { open, hide } = useDialog("account");

  useEffect(() => {
    if (!open) {
      setSigningIn(false);
    }
  }, [open]);

  const performLogin = useCallback((provider: firebase.auth.AuthProvider) => {
    setSigningIn(true);
    firebase
      .auth()
      .signInWithPopup(provider)
      .catch(console.error)
      .finally(() => setSigningIn(false));
  }, []);

  const eraseEverything = useCallback(() => {
    const { currentUser } = firebase.auth();
    if (!currentUser) {
      // Somehow we got into this state. Just fail fast.
      return;
    }

    setSigningIn(true);
    firebase
      .database()
      .ref(`/users/${currentUser.uid}`)
      .set(null)
      .then(() => currentUser.delete())
      .then(() => setSigningIn(false));
  }, []);

  let title = "";
  let content = null;
  if (!userId) {
    title = "Lagre fremgangen";
    content = (
      <>
        <p>
          Hvis du logger på, er det mulig å løse puslespillet på flere enheter.
          Finn ord på mobil på bussen, og fortsett spille hjemme på
          datamaskinen!
        </p>
        <div className={classes.providersContainer}>
          <button
            className={classes.provider}
            disabled={signingIn}
            onClick={() => performLogin(new firebase.auth.GoogleAuthProvider())}
          >
            <GoogleIcon />
          </button>
          <button
            className={classes.provider}
            disabled={signingIn}
            onClick={() => performLogin(new firebase.auth.GithubAuthProvider())}
          >
            <GithubIcon />
          </button>
        </div>
      </>
    );
  } else {
    const deleteAccount = ENABLE_DELETE_ACCOUNT && (
      <>
        <hr />
        <p>
          Hvis du vil, du kan slette kontoen din (og alle relaterte informasjon)
        </p>
        <DeleteAccountButton onDelete={() => eraseEverything()} />
      </>
    );

    title = "Din konto";
    content = (
      <>
        <p>
          Du er nå logget inn -- fremgangen din er lagret og vil være
          tilgjengelig på andre enheter hvor du er logget inn.
        </p>
        <p>Hvis du logger ut, fremgangen din vil bli lagret til neste gang.</p>
        <div className={classes.buttons}>
          <button
            onClick={() => firebase.auth().signOut()}
            className={classes.logOut}
          >
            Logg ut
          </button>
        </div>
        {deleteAccount}
      </>
    );
  }

  return (
    <Modal open={open} title={title} onClose={hide}>
      {content}
    </Modal>
  );
};

export default UserDialog;
