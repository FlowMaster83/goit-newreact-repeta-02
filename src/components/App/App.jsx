// import { useState, useEffect } from "react";
// import StatePractice from "./StatePractice";
// import Reader from "../Reader/Reader";
// import Text from "../Text/Text";
// import articles from "../articles.json";
// import ClickTracker from "../ClickTracker/ClickTracker";
import Modal from "../Modal/Modal";

// import Timer from "../Timer/Timer";

export default function App() {

  // const [isOpen, setIsOpen] = useState(false);
  // const [clicks, setClicks] = useState(0);

  // Якщо не передати масив залежностей, ефект буде викликаний при кожному оновленні компонента, тобто кожного разу, коли компонент прикладу оновлюється, ефект буде виконуватися і змінювати заголовок вкладки браузера.

  // useEffect(() => {
  //   document.title = `You clicked ${clicks} times`;
  //   console.log(document.title);
  // });

  // =================================================

  // Якщо другим аргументом хука useEffect передати порожній масив, то такий ефект виконається лише один раз - на етапі монтування компонента, і більше ніколи.

  // Такий ефект виконається лише один раз, відразу після монтування компонента в DOM. Ефекти, які реагують на монтування, використовуються для виконання коду без очікування дій користувача. Наприклад:

  // HTTP-запити за початковими даними.
  // Додавання слухачів на документ.
  // Запуск таймерів.
  // Зчитування з локального сховища.

  // useEffect(() => {
  //   console.log("You can see me only once!");
  // }, []);

  // =================================================

  return (
    <div>

      {/* <button onClick={() => setClicks(clicks + 1)}>
        You clicked {clicks} times
      </button> */}

      <Modal />

      {/* <Reader articles={articles} /> */}
      {/* <Text /> */}
      {/* <StatePractice /> */}
      {/* <ClickTracker /> */}

      {/* <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Close" : "Open"}
      </button> */}

      {/* {isOpen && <Timer />} */}
    </div>
  );
}
