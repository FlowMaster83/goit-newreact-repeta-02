import { useState } from "react";

const Button = ({ value, onCount }) => {
  return (
    <div>
      <button onClick={onCount}>Clicks: {value}</button>
    </div>
  );
};

export default function App() {
  const [clicks, setClicks] = useState(0);
  const [values, setValues] = useState({ first: 1, second: 2, third: 3 });

  const handleChangeValues = () => {
    setValues({ ...values, first: 10, second: 20, third: 30 });
  };

  const handleClick = () => {
    setClicks(clicks + 1);
    console.log(clicks);
  };

  const handleReset = () => {
    setClicks(0);
  };

  const total = values.first + values.second + values.third;

  // const handleClick = (event) => {
  //   console.log("click", event);
  // };

  // const handleOver = (event) => {
  //   console.log("hover", event);
  // };

  return (
    <div>
      <button onClick={handleChangeValues}>Change Values: {total}</button>

      <Button value={clicks} onCount={handleClick} />
      <Button value={clicks} onCount={handleClick} />
      <button onClick={handleReset}>Reset</button>

      {/* <button onClick={handleClick} onMouseOver={handleOver}>
        Button
      </button> */}
      {/* <button onClick={() => handleClick(5)}>Button</button> */}
    </div>
  );
}
