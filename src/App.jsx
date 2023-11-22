import { Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { TaskForm } from "./components/TaskForm";
import { TaskList } from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
 useEffect(()=>{
  let data=localStorage.getItem('tasks')
  if(data){setTasks(JSON.parse(data))}
 },[])
 
  useEffect(() => {
    localStorage.setItem('tasks',JSON.stringify(tasks))
  }, [tasks]);

  const addTask = (taskName,taskDescription) => {
    const newTask = { id: Date.now(), name: taskName,description:taskDescription, completed: false };
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
      /><TaskList
      tasks={tasks}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
      taskCompleted={true}
    />
    </Container>
  );
}

export default App;
