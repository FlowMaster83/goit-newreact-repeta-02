import { useState } from "react";

export default function ClickTracker() {
  const [clicks, setCkicks] = useState(0);

  console.log(clicks);

  return (
    <div>
      <button onClick={() => setCkicks(clicks + 1)}>Ckicks: {clicks}</button>
      <button onClick={() => setCkicks(0)}>Reset: {clicks}</button>
    </div>
  );
}
