import React from "react";
import { useState } from "react";
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
} from '@mui/material'

export default function New({ handleOpenDialog, handleCloseDialog, saveTask }) {

  return (
    <Dialog open={handleOpenDialog} onClose={handleCloseDialog}>
      <DialogTitle>Add a new task</DialogTitle>
      <DialogContent>
        <TextField
          label="Name of the task"
          margin="normal"
          className="textfield"
        />
        <TextField
          label="Task description"
          margin="normal"
          multiline
          rows={4}
          className="textfield"
        />
      </DialogContent>
      <DialogActions>
        <Button variant="contained" type="submit" onClick={saveTask}>
          Save
        </Button>
        <Button variant="outlined" onClick={handleCloseDialog}>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}
