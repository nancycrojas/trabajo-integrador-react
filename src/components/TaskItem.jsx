import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DeleteIcon from "@mui/icons-material/Delete";

import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

export const TaskItem = ({ task, toggleTaskCompleted, deleteTask }) => {
  return (
    <Card
      variant="outlined"
      sx={{ mb: 2, minHeight: 150, boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)" }}
    >
      <CardContent>
        <Typography
          variant="h5"
          component="div"
          style={{ textDecoration: task.completed ? "line-through" : "none" }}
        >
          {task.name}
          
        </Typography>
        <div>{task.description}</div>
      </CardContent>
      <CardActions>
        <Button
          onClick={() => toggleTaskCompleted(task.id)}
          variant="contained"
          startIcon={<CheckCircleIcon />}
        >
          Completada
        </Button>
        <Button
          onClick={() => deleteTask(task.id)}
          variant="outlined"
          startIcon={<DeleteIcon />}
        >
          Eliminar
        </Button>
      </CardActions>
    </Card>
  );
};
