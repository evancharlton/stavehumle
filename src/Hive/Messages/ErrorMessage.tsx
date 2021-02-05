import { BadGuess } from '../Hive';

type Props = { reason: BadGuess };

const ErrorMessage = ({ reason }: Props) => {
  let msg = '';
  switch (reason) {
    case 'already-found':
      msg = 'ordet har blitt allerede funnet';
      break;
    case 'invalid-letters':
      msg = 'bruker ugyldige bokstaver';
      break;
    case 'missing-center':
      msg = 'mangler obligatorisk bokstaven';
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
