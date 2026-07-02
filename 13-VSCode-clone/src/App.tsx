import "./App.css";
import RecursiveComponent from "./components/RecursiveComponent";
import { fileTree } from "./data";

function App() {
  return (
    <div className="my-5">
      <RecursiveComponent fileTree={fileTree} />
    </div>
  );
}

export default App;
