import { useState } from "react";

export default function App() {
  const [clicks, setClicks] = useState(0);

  // const handleClick = (event) => {
  //   console.log("click", event);
  // };

  // const handleOver = (event) => {
  //   console.log("hover", event);
  // };

  const handleCounter = () => {
    setClicks(clicks + 1);
    console.log(clicks);
  };

  return (
    <div>
      {/* <button onClick={handleClick} onMouseOver={handleOver}>
        Button
      </button> */}

      <button onClick={handleCounter}>Clicks: {clicks}</button>
      {/* <button onClick={() => handleClick(5)}>Button</button> */}
    </div>
  );
}
