import { ChangeEvent, useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';

const Start = () => {
  const history = useHistory();
  const [value, setValue] = useState('');

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    },
    [setValue]
  );

  const onSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      history.push(`/${value}`);
    },
    [value, history]
  );

  return (
    <div>
      <h1>Choose a date</h1>
      <form onSubmit={onSubmit}>
        <input type="text" onChange={onChange} value={value} />
        <button type="submit">Go</button>
      </form>
    </div>
  );
};

export default Start;
