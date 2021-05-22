import "./App.css";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Study React Pre-Class Notes",
      day: "Feb 5th at 2:30pm",
      isDone: false,
    },
    {
      id: 2,
      text: "Feed the Dog",
      day: "Feb 6th at 1:30pm",
      isDone: false,
    },
    {
      id: 3,
      text: "Attend in-Class",
      day: "Feb 7th at 20:00pm",
      isDone: false,
    },
  ]);

  const [showAddTask, setShowAddTask] = useState(false);

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 100) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (deletedTaskId) => {
    setTasks(tasks.filter((task) => task.id !== deletedTaskId));
  };

  const toggleDone = (toggleDoneId) => {
    setTasks(
      tasks.map((task) =>
        task.id === toggleDoneId ? { ...task, isDone: !task.isDone } : task
      )
    );
  };

  const toggleShow = () => setShowAddTask(!showAddTask);

  return (
    <div className="App">
      <Header
        title="Task Tracker"
        showAddTask={showAddTask}
        toggleShow={toggleShow}
      />
      {showAddTask && <AddTask addTask={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} deleteTask={deleteTask} toggleDone={toggleDone} />
      ) : (
        "No Tasks to Show"
      )}
    </div>
  );
}

export default App;
