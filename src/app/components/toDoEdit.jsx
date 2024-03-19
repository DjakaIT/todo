import React, { useState } from "react";

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
} from "@mui/material";

export default function EditTask({ taskToEdit, handleUpdateTask, handleOpenDialog, handleCloseDialog}) {
  const [title, setTitle] = useState(taskToEdit?.title || "");
  const [description, setDescription] = useState(taskToEdit?.description || "");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSaveTask = () => {
    const updatedData = { title, description };
    handleUpdateTask(updatedData, taskToEdit.id); 
    handleCloseDialog();
  };

  return (
    <Dialog open={handleOpenDialog} onClose={handleCloseDialog}>
      <DialogTitle>Edit Task</DialogTitle>
      <DialogContent className="taskDetails">
        <TextField
          label="Name of the task"
          margin="normal"
          className="textfield"
          value={title}
          onChange={handleTitleChange}
        />
        <TextField
          label="Task description"
          margin="normal"
          multiline
          rows={4}
          className="textfield"
          value={description}
          onChange={handleDescriptionChange}
        />
      </DialogContent>
      <DialogActions>
        <Button variant="contained" type="submit" onClick={handleSaveTask}>
          Update
        </Button>
        <Button variant="outlined" onClick={handleCloseDialog}>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}
