import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  //TOGGLES TO SHOW FORM
  const [showAddTask, setShowAddTask] = useState(false)
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

  // ADD Task
  const addTask = (task) => {
    //MAKES RANDOM ID SINCE WE DONT HAVE BACKEND
    const id = Math.floor(Math.random() * 1000) + 1;

    const newTask = { id, ...task}
    setTasks([...tasks, newTask])
  };

  // Delete Task

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // TOGGLE REMINDER

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No List To Show"
      )}
    </div>
  );
}

export default App;
