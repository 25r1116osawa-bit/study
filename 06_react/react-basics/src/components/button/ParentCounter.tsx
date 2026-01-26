
import CounterButton from "./CounterButton";
import CounterDisplay from "./CounterDisplay";
import { useCounter } from "./useCounter";

const ParentCounter = () => {
  const { count, increment } = useCounter();

  return (
    <>
      <CounterDisplay count={count} />
      <CounterButton onIncrement={increment} />
    </>
  );
};

export default ParentCounter;
