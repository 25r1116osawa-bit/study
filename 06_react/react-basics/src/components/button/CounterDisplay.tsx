type Props = {
  count: number;
};

const CounterDisplay = ({ count }: Props) => {
  return <p>現在の数：{count}</p>;
};

export default CounterDisplay;
