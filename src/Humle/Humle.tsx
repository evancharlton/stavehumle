import { CSSProperties } from 'react';
import SVG from './Humle.svg';

type Props = {
  size?: number;
  style?: CSSProperties;
};

const Icon = ({ size = 36, style = {} }: Props) => {
  return (
    <img
      src={SVG}
      width={size}
      height={size}
      style={{ margin: 0, padding: 0, ...style }}
      alt="Stavehumle ikon"
    />
  );
};

export default Icon;
