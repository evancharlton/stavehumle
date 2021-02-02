import { BadGuess } from '../Hive';

const ErrorMessage = ({ code }: { code: BadGuess | undefined }) => {
  let msg = '';
  switch (code) {
    case 'already-found':
      msg = 'ordet ble allerede funnet';
      break;
    case 'invalid-letters':
      msg = 'bruker ugyldige bokstaver';
      break;
    case 'missing-center':
      msg = 'mangler obligatorisk brev';
      break;
    case 'too-short':
      msg = 'for kort';
      break;
    case 'unknown-word':
      msg = 'ukjent ord';
      break;
    default:
      return null;
  }

  return <span>{msg}</span>;
};

export default ErrorMessage;
