
import { useState } from "react";

const ParentCounter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <CounterDisplay count={count} />
      <CounterButton onIncrement={() => setCount(count + 1)} />
    </div>
  );
};

const CounterDisplay = ({ count }: { count: number }) => {
  return <p>現在の数：{count}</p>;
};

const CounterButton = ({ onIncrement }: { onIncrement: () => void }) => {
  return <button onClick={onIncrement}>＋1</button>;
};

export default ParentCounter