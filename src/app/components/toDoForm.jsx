import React from "react";
import { useState } from "react";

import '../css/toDoForm.css';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function Form() {
  const [isExpanded, setIsExpanded] = useState(false);

  function handleExpandContent() {
    setIsExpanded((prevExpanded) => !prevExpanded);
  }

  function handleSaveTask() {
    // Handle task saving logic here
    setIsExpanded(false); // Close the form after saving
  }

  return (
    <div className="mainDivForm">
      <form action="" className="todoForm">
        <div className="formTitleDiv">
          <h2 className="formTitle">Manage tasks</h2>
          <Button
            variant="contained"
            color="primary"
            onClick={handleExpandContent}
          >
            New +
          </Button>
        </div>

        {isExpanded && (
          <div className="taskDetails">
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

            <div className="submitButtonsDiv">
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className="saveBtn"
                  onClick={handleSaveTask}
                >
                  Save
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  className="closeBtn"
                  onClick={() => setIsExpanded(false)}
                >
                  Close
                </Button>
            </div>
          
          </div>
        )}
      </form>
    </div>
  );
}
