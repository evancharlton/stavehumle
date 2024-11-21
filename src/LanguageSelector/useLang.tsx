import { useParams } from 'react-router-dom';

export const useLang = () => {
  const params = useParams();
  return params?.lang ?? '';
};
