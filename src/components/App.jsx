import { useState } from "react";
import css from "./App.module.css";

// state isolation
const ClickCounter = ({ value, onCount }) => {
  return <button onClick={onCount}>Clicks: {value}</button>;
};

export default function App() {
  const [clicks, setClicks] = useState(0); // 1. hook

  const handleClick = () => {
    setClicks(clicks + 1);
  }; // 2. state function

  return (
    <div className={css.container}>
      <h1>State in React</h1>

      <ClickCounter value={clicks} onCount={handleClick} />
      <ClickCounter value={clicks} onCount={handleClick} />
    </div>
  );
}
