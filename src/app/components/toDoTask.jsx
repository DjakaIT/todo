import React from "react";
import { IconButton, Checkbox } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Edit } from "@mui/icons-material";
import { Typography } from "@mui/material";
import "../css/toDoTask.css";

export default function ToDoTask({ task, handleDeleteTask, handleUpdateTask }) {
  return (
    <div className="task-container">

      <div className="taskIconsDiv">
        <Checkbox defaultChecked={task.completed} className="completedCheckbox" />
        <Typography variant="h6" className={task.completed ? "completed-task" : "not-completed-task"}>
          {task.title}
        </Typography>
      </div>
      
      <div className="taskDetailsDiv">
      <IconButton aria-label="delete" onClick={() => handleDeleteTask(task.id)}>
          <DeleteIcon className="deleteIcon"/>
      </IconButton>       
        {task.description && (
          <Typography variant="body2" className="task-description">
            {task.description}
          </Typography>
        )}
      </div>

      <div className="editTask">
        <IconButton aria-label="update" onClick={() => handleUpdateTask(task.id)}>
          <Edit className="editIcon"/>
        </IconButton>
        <Typography variant="body2" className="edit-task">
            Edit the task
        </Typography>
      </div>

    </div>
  );
}
