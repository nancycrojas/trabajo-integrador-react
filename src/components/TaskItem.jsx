import DeleteIcon from "@mui/icons-material/Delete";

import {
  Button,
  Card,
  CardActions,
  CardContent,
  Checkbox,
  Divider,
  Typography,
} from "@mui/material";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export const TaskItem = ({ task, toggleTaskCompleted, deleteTask }) => {
  const handleCheckboxChange = () => {
    toggleTaskCompleted(task.id);
  };

  return (
    <Card
      variant="outlined"
      sx={{
        mb: 2,
        my: 3,
        // mx: 2,
        minHeight: 150,
        boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
      }}
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
        <Divider />
      </CardContent>
      <CardActions>
        <Checkbox
          {...label}
          checked={task.completed}
          onChange={handleCheckboxChange}
        />
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
