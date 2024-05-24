import { useState, useEffect } from "react";

export default function ClickTracker() {
  const [clicks, setCkicks] = useState(0);
  const [date, setDate] = useState(Date.now());

  //   useEffect(()=>{}, [array of dependencies])
  //   можливість виконати код при оновленні компонента

  // // виконується ТІЛЬКИ на монтуванні
  // useEffect(() => {
  //   console.log("Only on mount");
  // }, []);

  //   якщо є зовнішні змінні: пропс, стан або змінна, що обчислюється на базі пропсу або стану, масив залежностей НЕ МАЄ бути пустим
  //   викон при монтуванні і кожен раз, коли змінюється будь яка залежність із масиву
  useEffect(() => {
    console.log(clicks);

    return () => {
      console.log("clicks cleanup");
    };
  }, [clicks]);

  // useEffect(() => {
  //   console.log(date);
  // }, [date]);

  return (
    <div>
      <button onClick={() => setCkicks(clicks + 1)}>Ckicks: {clicks}</button>
      <button onClick={() => setCkicks(0)}>Reset: {clicks}</button>
      <button onClick={() => setDate(Date.now())}>Date: {date}</button>
    </div>
  );
}
