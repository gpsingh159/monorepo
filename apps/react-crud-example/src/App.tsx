import CrudExample from "./CrudExample";
import "./App.css";
import { greet } from "common-utils";

function App() {
  return (
    <>
      <CrudExample />
      <div style={{ marginTop: 20 }}>{greet("CRUD App User")}</div>
    </>
  );
}

export default App;
