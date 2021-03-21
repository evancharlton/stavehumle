import Modal from 'Modal';
import { useCallback, useMemo, useState } from 'react';
import ReactDOM from 'react-dom';
import { BiUserCircle as AvatarIcon } from 'react-icons/bi';
import { FaGoogle as GoogleIcon, FaGithub as GithubIcon } from 'react-icons/fa';
import firebase, { useLogin } from 'sync';
import classes from './UserDialog.module.css';
import headerClasses from '../HeaderButton.module.css';

const UserDialog = () => {
  const { userId } = useLogin();
  const [signingIn, setSigningIn] = useState(false);
  const [showing, setShowing] = useState(false);

  const onClose = useCallback(() => {
    setShowing(false);
    setSigningIn(false);
  }, [setShowing]);

  const beginLogin = useCallback((provider: firebase.auth.AuthProvider) => {
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

    firebase
      .database()
      .ref(`/users/${currentUser.uid}`)
      .set(null)
      .then(() => currentUser.delete())
      .then(() => setSigningIn(false));
  }, []);

  const modal = useMemo(() => {
    if (!showing) {
      return null;
    }

    let content = null;
    if (!userId) {
      content = (
        <>
          <button
            disabled={signingIn}
            onClick={() => beginLogin(new firebase.auth.GoogleAuthProvider())}
          >
            <GoogleIcon />
          </button>
          <button
            disabled={signingIn}
            onClick={() => beginLogin(new firebase.auth.GithubAuthProvider())}
          >
            <GithubIcon />
          </button>
        </>
      );
    } else {
      content = (
        <>
          <p>
            You are logged in -- your progress is being saved, and is available
            on any other devices where you sign in.
          </p>
          <p>If you log out, your progress will not be lost.</p>
          <button onClick={() => firebase.auth().signOut()}>Log out</button>
          <hr />
          <p>
            If you wish, you can delete all of your saved data. This is{' '}
            <strong>permanent and irreversible.</strong>
          </p>
          <button onClick={() => eraseEverything()}>Erase everything</button>
        </>
      );
    }

    return (
      <Modal title="User" onClose={onClose}>
        {content}
      </Modal>
    );
  }, [showing, onClose, userId, signingIn, beginLogin, eraseEverything]);

  const portal = ReactDOM.createPortal(modal, document.body);
  return (
    <>
      <button
        onClick={() => setShowing(true)}
        className={[classes.avatarButton, headerClasses.button].join(' ')}
      >
        <AvatarIcon />
      </button>
      {portal}
    </>
  );
};

export default UserDialog;
