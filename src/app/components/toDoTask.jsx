import React from "react";
import { IconButton, Checkbox } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export default function ToDoTask({ task, handleDeleteTask }) {
  return (
    <div className="task-container">
      <Checkbox defaultChecked={task.completed} />
      <p className={task.completed ? "completed-task" : ""}>{task.title}</p>
      {task.description && <p className="task-description">{task.description}</p>}
      <IconButton aria-label="delete" onClick={() => handleDeleteTask(task.id)}>
        <DeleteIcon />
      </IconButton>
    </div>
  );
}
