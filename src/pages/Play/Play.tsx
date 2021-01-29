import { useHistory, useParams } from 'react-router-dom';
import Hive from '../../Hive';

const Play = () => {
  const params = useParams();

  return (
    <div>
      <h1>Playing </h1>
      <pre>{JSON.stringify(params, null, 2)}</pre>
      <Hive />
    </div>
  );
};

export default Play;
