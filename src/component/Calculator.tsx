import { useCountable } from "../store/zustand";

function Calculator() {
  const count = useCountable((s) => s.value);  
  const increment = useCountable((s) => s.increment);
  const decrement = useCountable((s) => s.decrement);

  return (
    <div className="flex flex-col items-center">
      <p>{count}</p>
      <div className="flex">
        <button className="border" onClick={increment}>Increment</button>
        <button className="border" onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
}

export default Calculator;
