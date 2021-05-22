import "./App.css";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Task from "./components/Task";

function App() {
  return (
    <div className="App">
      <Header />
      <AddTask />
      <Task />
    </div>
  );
}

export default App;
