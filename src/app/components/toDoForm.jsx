import React, { useState } from "react";
import '../css/toDoForm.css';
import New from "./toDoNew";
import ToDoList from "./toDoList";
import { nanoid } from "nanoid";


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


export default function Form() {
  const [openDialog, setOpenDialog] = useState(false);
  const [tasks, setTasks] = useState([]);

  const handleSaveTask = (newTaskData) => {
    const newTask = {
      id: nanoid(),
      ...newTaskData, 
      completed: false, 
    };

    setTasks([...tasks, newTask]);
    setOpenDialog(false);
  };

  const handleDialogOpen = () => {
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  return (
    <div className="mainDivForm">
      <form action="" className="todoForm">
        <div className="formTitleDiv">
          <h2 className="formTitle">Manage tasks</h2>
          <Button
            variant="contained"
            color="primary"
            onClick={handleDialogOpen}
          >
            New +
          </Button>
        </div>
        <New 
          handleOpenDialog={openDialog} 
          handleCloseDialog={handleDialogClose} 
          saveTask={handleSaveTask}
        />
        <ToDoList tasks={tasks} />
      </form>
    </div>
  );
}
