import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";
import { useEffect, useState } from "react";

const LOCAL_STORAGE_KEY = "todo:savedTasks";

function App() {
  const [tasks, setTasks] = useState([]);

  async function loadSavedTasks() {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      setTasks(JSON.parse(saved));
    }
    let resOne = await fetch(`http://localhost:5003/api/`);
  }

  useEffect(() => {
    loadSavedTasks();
  }, []);

  function setTasksAndSave(newTasks) {
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
  }

  async function addTask(taskTitle) {
    const obj = {
      id: crypto.randomUUID(),
      title: taskTitle,
      isCompleted: false,
    };

    setTasksAndSave([...tasks, obj]);
    const serverObj = {
      task_id: obj.id,
      is_completed: obj.isCompleted,
      title: obj.title,
    };

    console.log(JSON.stringify(obj));
    let resThree = await fetch("http://localhost:5003/api/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(serverObj),
    });
    let data = await resThree.json();
    console.log(data);
  }

  async function deleteTaskById(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasksAndSave(newTasks);
    let resFour = await fetch(`http://localhost:5003/api/${taskId}`, {
      method: "DELETE",
    });
    let data = await resFour.json();
    console.log(data);
  }

  async function toggleTaskCompletedById(taskId) {
    const taskToUpdate = tasks.find((task) => {
      return task.id == taskId;
    });
    const objTwo = {
      ...taskToUpdate,
      isCompleted: !taskToUpdate.isCompleted,
    };
    const newTasks = tasks.map((item) => {
      if (item.id == taskId) {
        return objTwo;
      }
      return item;
    });
    setTasksAndSave(newTasks);
    const serverObj = {
      task_id: objTwo.id,
      is_completed: objTwo.isCompleted,
      title: objTwo.title,
    };
    let resFive = await fetch(`http://localhost:5003/api/${taskId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(serverObj),
    });
    let data = await resFive.json();
    console.log(data);
  }
  
  return (
    <div>
      <Header onAddTask={addTask} />
      <Tasks
        tasks={tasks}
        onComplete={toggleTaskCompletedById}
        onDelete={deleteTaskById}
      />
    </div>
  );
}

export default App;
