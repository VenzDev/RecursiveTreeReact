import * as data from "./data/data.json";
import RecursiveNode from "./components/RecursiveNode";
import "./styles/app.scss";

function App() {
  return (
    <div className="container">
      <RecursiveNode {...data.default} />
    </div>
  );
}

export default App;
