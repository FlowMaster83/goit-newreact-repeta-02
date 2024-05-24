import { useState } from "react";
import css from "./App.module.css";

// state isolation
const ClickCounter = ({ value, onCount }) => {
  return <button onClick={onCount}>Clicks: {value}</button>;
};

export default function App() {
  const [clicks, setClicks] = useState(0); // 1. hook
  const [values, setValues] = useState({
    a: 1,
    b: 2,
    c: 3,
  });

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  const handleReset = () => {
    setClicks(0);
  };

  const handleChange = () => {
    setValues({
      ...values,
      b: 5,
    });
  };

  return (
    <div className={css.container}>
      <h1>State in React</h1>

      <hr />
      <button onClick={handleChange}>Change values</button>

      <ClickCounter value={clicks} onCount={handleClick} />
      <ClickCounter value={clicks} onCount={handleClick} />
      <ClickCounter value={clicks} onCount={handleClick} />
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
