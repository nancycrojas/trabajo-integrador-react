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
import { useState } from "react";
import { DraggableDialog } from "./DraggableDialog";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export const TaskItem = ({ task, toggleTaskCompleted, deleteTask }) => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleConfirmDelete = () => {
    deleteTask(task.id);
    setOpenDialog(false);
  };

  const handleCheckboxChange = () => {
    toggleTaskCompleted(task.id);
  };

  return (
    <Card
      variant="outlined"
      sx={{
        mb: 2,
        my: 3,
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
          onClick={handleOpenDialog}
          variant="outlined"
          startIcon={<DeleteIcon />}
        >
          Eliminar
        </Button>
      </CardActions>
      <DraggableDialog
        open={openDialog}
        handleClose={handleCloseDialog}
        onConfirm={handleConfirmDelete}
        title="¿Estás seguro de que deseas eliminar esta tarea?"
        message="Esta acción no se puede deshacer."
      />
    </Card>
  );
};
