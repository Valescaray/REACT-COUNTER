import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [stepCount, setStepCount] = useState(1);
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>
        <input
          type="range"
          min={0}
          max={10}
          value={stepCount}
          onChange={(e) => setStepCount(Number(e.target.value))}
        />
        <span>step:{stepCount}</span>
      </div>

      <Count
        name="Count"
        Count={count}
        setCount={setCount}
        onIncrement={() => setCount(count + stepCount)}
        onDecrement={() => setCount(count - stepCount)}
      />
      <CurrentDates Count={count} />
    </div>
  );
}

function Count({ name, setCount, Count, onIncrement, onDecrement }) {
  return (
    <div className="steps">
      <button onClick={onDecrement}>-</button>
      <input
        type="text"
        value={Count}
        onChange={(e) => setCount(Number(e.target.value))}
      />
      <button onClick={onIncrement}>+</button>
    </div>
  );
}

function CurrentDates({ Count }) {
  const currentDate = new Date();

  function addDays(date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  const futureDate = addDays(currentDate, Count);

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const formattedDate = futureDate.toLocaleDateString("en-US", options);

  return (
    <div className="steps">
      <p>
        <span>
          {Count === 0
            ? "Today is"
            : Count > 0
            ? `${Count} days from today is`
            : `${Math.abs(Count)} days ago was `}
        </span>
        <span>{formattedDate}</span>
      </p>
    </div>
  );
}
