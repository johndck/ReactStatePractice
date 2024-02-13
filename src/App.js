import { useState } from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h1>Challenge</h1>
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);

  function decrementCount() {
    setCount((c) => c - step);
  }
  function increaseCount() {
    setCount((c) => c + step);
    //setDays((d) => d * step);
  }

  function decrementStep() {
    if (step > 1) {
      setStep((s) => s - 1);
    }
  }
  function increaseStep() {
    setStep((s) => s + 1);
  }

  return (
    <div>
      <div>Test</div>

      <div>
        <button onClick={decrementStep}>-</button>
        <span>Step:{step}</span>
        <button onClick={increaseStep}>+</button>
      </div>

      <div>
        <button onClick={decrementCount}>-</button>
        <span>Count:{count}</span>
        <button onClick={increaseCount}>+</button>
      </div>
      <div>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </div>
    </div>
  );
}
