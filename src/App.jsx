import { Container, Snackbar, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { TaskForm } from "./components/TaskForm";
import { TaskList } from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  useEffect(() => {
    let data = localStorage.getItem("tasks");
    if (data) {
      setTasks(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (taskName, taskDescription) => {
    const newTask = {
      id: Date.now(),
      name: taskName,
      description: taskDescription,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setOpenSnackbar(true);
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

  const pendingTasks = tasks.filter((task) => !task.completed);
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <Container maxWidth="xl">
      <Typography variant="h4" mt={6}>
        Lista de tareas
      </Typography>
      <TaskForm addTask={addTask} />
      {pendingTasks.length > 0 && (
        <>
          <Typography variant="h5" mt={4}>
            Tareas Pendientes
          </Typography>
          <TaskList
            tasks={pendingTasks}
            toggleTaskCompleted={toggleTaskCompleted}
            deleteTask={deleteTask}
          />
        </>
      )}
      {completedTasks.length > 0 && (
        <>
          <Typography variant="h5" mt={4}>
            Tareas Completadas
          </Typography>
          <TaskList
            tasks={completedTasks}
            toggleTaskCompleted={toggleTaskCompleted}
            deleteTask={deleteTask}
            taskCompleted={true}
          />
        </>
      )}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
        message="Tarea agregada correctamente"
      />
    </Container>
  );
}

export default App;
