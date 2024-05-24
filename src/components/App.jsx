// import StatePractice from "./StatePractice";
import Reader from "./Reader";
import articles from "./data/articles.json";

export default function App() {
  return (
    <div>
      <Reader articles={articles} />
      {/* <StatePractice /> */}
    </div>
  );
}
