import { Grid } from "@mui/material";
import { TaskItem } from "./TaskItem";

export const TaskList = ({ tasks, toggleTaskCompleted, deleteTask,taskCompleted=false }) => {
  const taskList=(completed)=>{
    return(
    tasks
    .filter(task=>task.completed===completed)
    .map((task) => (
      <Grid item xs={12} sm={8} md={6} lg={4} key={task.id}>
        <TaskItem
          task={task}
          toggleTaskCompleted={toggleTaskCompleted}
          deleteTask={deleteTask}
        />
      </Grid>
    )))
  }
  
  return (
    <Grid container spacing={2} sx={{ mt: 4 }}>
      {
        taskList(taskCompleted)
      }
    </Grid>
  );
};
