type Props = {
  onIncrement: () => void;
};

const CounterButton = ({ onIncrement }: Props) => {
  return <button onClick={onIncrement}>＋1</button>;
};

export default CounterButton;
