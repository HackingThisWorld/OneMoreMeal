import { FC } from "react";
import CountUp from "react-countup";

interface Props {
  start: number;
  end: number;
  duration: number;
}

const CountTextUp: FC<Props> = ({ start, end, duration }) => {
  return <CountUp start={start} end={end} duration={duration} />;
};

export default CountTextUp;
