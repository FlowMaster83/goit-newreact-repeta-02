// import { useState } from "react";
// import StatePractice from "./StatePractice";
// import Reader from "../Reader/Reader";
// import Text from "../Text/Text";
// import articles from "../articles.json";
import ClickTracker from "../ClickTracker/ClickTracker";

// import Timer from "../Timer/Timer";

export default function App() {
  // const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      {/* <Reader articles={articles} /> */}
      {/* <Text /> */}
      {/* <StatePractice /> */}
      <ClickTracker />

      {/* <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Close" : "Open"}
      </button> */}

      {/* {isOpen && <Timer />} */}
    </div>
  );
}
