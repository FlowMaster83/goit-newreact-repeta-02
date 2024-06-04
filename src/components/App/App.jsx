import { useState } from "react";

export default function App() {
  const [firstClicks, setFirstClicks] = useState(0);
  const [secondClicks, setSecondClicks] = useState(0);
  // const handleClick = (event) => {
  //   console.log("click", event);
  // };

  // const handleOver = (event) => {
  //   console.log("hover", event);
  // };

  const handleFirstCounter = () => {
    setFirstClicks(firstClicks + 1);
    console.log(firstClicks);
  };

  const handleSecondCounter = () => {
    setSecondClicks(secondClicks + 1);
  };

  return (
    <div>
      {/* <button onClick={handleClick} onMouseOver={handleOver}>
        Button
      </button> */}
      {/* <button onClick={() => handleClick(5)}>Button</button> */}

      <button onClick={handleFirstCounter}>Clicks: {firstClicks}</button>
      <button onClick={handleSecondCounter}>Clicks: {secondClicks}</button>
    </div>
  );
}
