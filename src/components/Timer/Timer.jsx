// import { useEffect } from "react";

// export default function Timer() {
//   useEffect(() => {
//     setInterval(() => {
//       console.log("SetInterval");
//       const id = setInterval(() => {
//         console.log(Date.now());
//       }, 1000);

//       // функція очищення ефекта (спрацьовує при розмонтуванні)
//       return () => {
//         console.log("cleanup");
//         clearInterval(id);
//       };
//     }, []);

//     return <div>Timer</div>;
//   });
// }
