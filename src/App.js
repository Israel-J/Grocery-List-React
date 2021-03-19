import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  //EVENTS
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Food Shopping",
      day: "Feb 13th at 1pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Doctors appointment",
      day: "Feb 13th at 12pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Gym time",
      day: "Feb 13th at 10am",
      reminder: false,
    },
  ]);

  // Delete Task

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  };

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;
