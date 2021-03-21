import { usePuzzlePath } from 'GameLoader/usePuzzlePath';
import { useLogin } from '../../sync';
import UploadNewLocalWords from './UploadNewLocalWords';
import InsertNewRemoteWords from './InsertNewRemoteWords';
import UploadInitialLocalStorage from './UploadInitialLocalStorage';
import DownloadInitialRemoteWords from './DownloadInitialRemoteWords';

type Props = {
  children: React.ReactNode;
};

const FirebaseWatcher = ({ children }: Props) => {
  const key = usePuzzlePath();
  const { userId } = useLogin();

  if (!userId) {
    return <>{children}</>;
  }

  const path = `/users/${userId}/${key}`;

  // TODO: In the future, consider inlining each of these into their respective
  // components. That is, until things have been uploaded, don't download the
  // remote set. And don't watch for new words until the initial set has been
  // downloaded. Etc.
  return (
    <UploadInitialLocalStorage node={path}>
      <UploadNewLocalWords node={path}>
        <DownloadInitialRemoteWords node={path}>
          <InsertNewRemoteWords node={path}>
            <>{children}</>
          </InsertNewRemoteWords>
        </DownloadInitialRemoteWords>
      </UploadNewLocalWords>
    </UploadInitialLocalStorage>
  );
};

export default FirebaseWatcher;
