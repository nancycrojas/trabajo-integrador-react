import { Button, FormControl, Grid, TextField } from "@mui/material";
import { useState } from "react";

export const TaskForm = ({ addTask }) => {
  const [taskName, setTaskName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(taskName);
    setTaskName("");
    console.log(taskName);
  };

  return (
    <FormControl component="form" onSubmit={handleSubmit} sx={{ mb: 4 }}>
      <Grid container mt={4} gap={4}>
        <TextField
          fullWidth
          id="standard-basic"
          label="Agregar una nueva tarea"
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          sx={{
            boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
          }}
        />
        <Button type="submit" variant="contained" color="secondary">
          Agregar tarea
        </Button>
      </Grid>
    </FormControl>
  );
};
