import "./App.css";
import Header from "./Components/Header";
import Tasks from "./Components/Tasks";
import { useState } from "react";
import AddTask from "./Components/AddTask";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Job center appointment",
      day: "Aug 12th at 16:00",
      reminder: true,
    },
    {
      id: 2,
      text: "Buy some food in Tesco",
      day: "Aug 12th at 16:40",
      reminder: true,
    },
    {
      id: 3,
      text: "Continue learning amazing course",
      day: "Aug 12th at 18:00",
      reminder: true,
    },
  ]);

  //Delete TASK
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  //Show add Task
  const [showAddTask, setShowAddTask] = useState(false);

  //Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask addTask={addTask} />}
      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          toggleReminder={toggleReminder}
          deleteTask={deleteTask}
        />
      ) : (
        "No Tasks to Show"
      )}
    </div>
  );
}

export default App;
