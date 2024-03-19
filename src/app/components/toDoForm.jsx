import React, { useState } from "react";
import '../css/toDoForm.css';
import New from "./toDoNew";
import ToDoList from "./toDoList";
import EditTask from "./toDoEdit";
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
  const [updatedTasks, setUpdatedTasks] = useState(null);
  const [editTaskDialogOpen, setEditTaskDialogOpen] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null); 

  const handleSaveTask = (newTaskData) => {
    const newTask = {
      id: nanoid(),
      ...newTaskData,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setOpenDialog(false);
  };

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const handleEditTask = (task) => {
    setTaskToEdit(task); 
    setEditTaskDialogOpen(true); 
  };

  const handleUpdateTask = (updateData, taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, ...updateData };
      }
      return task;
    });

    setTasks(updatedTasks);
    setEditTaskDialogOpen(false); 
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
        <ToDoList 
          tasks={tasks} 
          handleDeleteTask={handleDeleteTask} 
          handleUpdateTask={handleEditTask} 
          />
        <EditTask
          taskToEdit={taskToEdit}
          handleCloseDialog={handleDialogClose}
          handleUpdateTask={handleUpdateTask}
          open={editTaskDialogOpen}

        />
      </form>
    </div>
  );
}
