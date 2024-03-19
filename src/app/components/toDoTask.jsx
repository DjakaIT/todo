import React from "react";
import { IconButton, Checkbox } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import "../css/toDoTask.css";

export default function ToDoTask({ task, handleDeleteTask }) {
  return (
    <div className="task-container">
      <Checkbox defaultChecked={task.completed} className="completedCheckbox" />
      <p className={task.completed ? "completed-task" : "not-completed-task"}>{task.title}</p>
      {task.description && <p className="task-description">{task.description}</p>}
      <IconButton aria-label="delete" onClick={() => handleDeleteTask(task.id)}>
        <DeleteIcon className="deleteIcon"/>
      </IconButton>
    </div>
  );
}
