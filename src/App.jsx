import { Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { TaskForm } from "./components/TaskForm";
import { TaskList } from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    console.log("Tareas actualizadas:", tasks);
  }, [tasks]);

  const addTask = (taskName) => {
    const newTask = { id: Date.now(), name: taskName, completed: false };
    setTasks([...tasks, newTask]);
  };

  const toggleTaskCompleted = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <Container maxWidth="xl">
      <Typography variant="h3" mt={6}>
        Lista de tareas
      </Typography>
      <TaskForm addTask={addTask} />
      <TaskList
        tasks={tasks}
        toggleTaskCompleted={toggleTaskCompleted}
        deleteTask={deleteTask}
      />
    </Container>
  );
}

export default App;
