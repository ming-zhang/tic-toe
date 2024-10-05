import React from "react";
import classNames from 'classnames';


type Props = {
  value: string;
  expiring: boolean;
  onClick: () => void;
};
const Square: React.FC<Props> = ({ value, expiring, onClick}: Props) => {
  return (
    <button className={classNames({
      "square": true,
      "expiring": expiring,
      })} onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
