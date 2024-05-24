// import StatePractice from "./StatePractice";
import Reader from "../Reader/Reader";
import Text from "../Text/Text";
import articles from "../articles.json";

export default function App() {
  return (
    <div>
      <Reader articles={articles} />
      <Text />
      {/* <StatePractice /> */}
    </div>
  );
}