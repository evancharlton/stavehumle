import DatePicker, { Props } from './DatePicker';
import { action } from '@storybook/addon-actions';
import { HashRouter } from 'react-router';

const info = {
  title: 'Hive / Header / CalendarButton / DatePicker',
  decorators: [
    (story: () => React.ReactNode) => <HashRouter>{story()}</HashRouter>,
  ],
};

export default info;

export const Today = (props: Partial<Props>) => {
  return <DatePicker onChange={action('onChange')} {...props} />;
};

export const SpecificDay = (props: Partial<Props>) => {
  const now = new Date();
  const gameId = [
    now.getFullYear(),
    `0${now.getMonth() + 1}`.substr(-2),
    `0${now.getDate() - 1}`.substr(-2),
  ].join('-');
  return (
    <DatePicker onChange={action('onChange')} gameId={gameId} {...props} />
  );
};
