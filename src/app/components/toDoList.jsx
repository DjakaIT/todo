import React from "react";
import ToDoTask from "./toDoTask";

export default function ToDoList({ tasks, handleDeleteTask, handleUpdateTask, handleOpenDialog }) {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <ToDoTask 
          key={task.id} task={task} 
          handleDeleteTask={handleDeleteTask} 
          handleUpdateTask={handleUpdateTask}
          handleOpenDialog={handleOpenDialog}
        />
      ))}
    </div>
  );
}
