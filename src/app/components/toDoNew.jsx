import React, { useState } from "react";
import '../css/toDoNew.css';

import {
  IconButton,
  DeleteIcon,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
} from "@mui/material";

export default function New({ handleOpenDialog, handleCloseDialog, saveTask }) {
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskDescription, setNewTaskDescription] = useState("");

  const handleSaveTask = () => {
    saveTask({ title: newTaskTitle, description: newTaskDescription });
    handleCloseDialog();
  }

  const handleTitleChange = (event) => {
    setNewTaskTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setNewTaskDescription(event.target.value);
  };

  return (
    <Dialog open={handleOpenDialog} onClose={handleCloseDialog}>
      <DialogTitle>Add a new task</DialogTitle>
      <DialogContent className="taskDetails">
        <TextField
          label="Name of the task"
          margin="normal"
          className="textfield"
          value={newTaskTitle}
          onChange={handleTitleChange}
        />
        <TextField
          label="Task description"
          margin="normal"
          multiline
          rows={4}
          className="textfield"
          value={newTaskDescription}
          onChange={handleDescriptionChange}
        />
      </DialogContent>
      <DialogActions>
        <Button variant="contained" type="submit" onClick={handleSaveTask}>
          Save
        </Button>
        <Button variant="outlined" onClick={handleCloseDialog}>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}
