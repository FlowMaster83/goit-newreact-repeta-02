import { useState } from "react";

export default function Text() {
  const [isVisible, setisVisible] = useState(false);

  const handleToggle = () => {
    setisVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={handleToggle}>{isVisible ? "Hide" : "Show"}</button>
      {isVisible && (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sequi
          aliquid ratione laboriosam sint labore nostrum, commodi placeat
          necessitatibus et similique, error, modi rem repellat quas quaerat
          pariatur esse dolores.
        </p>
      )}
    </div>
  );
}
