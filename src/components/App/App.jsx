import { useState } from "react";

const Button = () => {
  const [click, setClick] = useState(0);

  const handleClick = () => {
    setClick(click + 1);
    console.log(click);
  };

  return (
    <div>
      <button onClick={handleClick}>Clicks: {click}</button>
    </div>
  );
};

export default function App() {
  // const handleClick = (event) => {
  //   console.log("click", event);
  // };

  // const handleOver = (event) => {
  //   console.log("hover", event);
  // };

  return (
    <div>
      <Button />
      <Button />

      {/* <button onClick={handleClick} onMouseOver={handleOver}>
        Button
      </button> */}
      {/* <button onClick={() => handleClick(5)}>Button</button> */}
    </div>
  );
}
