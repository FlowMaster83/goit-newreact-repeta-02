import { useState } from "react";

// state isolation
const ClickCounter = ({ value, onCount }) => {
  return <button onClick={onCount}>Clicks: {value}</button>;
};

export default function StatePractice() {
  const [clicks, setClicks] = useState(0);
  const [values, setValues] = useState({
    a: 1,
    b: 2,
    c: 3,
  });

  // зробити копію об'єкту через spread і вже там оновляти стан
  const handleChangeValues = () => {
    setValues({
      ...values,
      b: 5,
      c: 10,
    });
  };

  // функція, що змінює стан
  const handleClick = () => {
    setClicks(clicks + 1);
  };

  const handleReset = () => {
    setClicks(0);
  };

  // обчислювальні значення
  const total = values.a + values.b + values.c;

  return (
    <div>
      <h1>State in React</h1>

      <hr />
      <button onClick={handleChangeValues}>Change values: {total}</button>

      <ClickCounter value={clicks} onCount={handleClick} />
      <ClickCounter value={clicks} onCount={handleClick} />
      <ClickCounter value={clicks} onCount={handleClick} />
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
