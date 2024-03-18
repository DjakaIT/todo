import React from "react";
import ToDoTask from "./toDoTask";

export default function ToDoList({ tasks, handleDeleteTask }) {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <ToDoTask key={task.id} task={task} handleDeleteTask={handleDeleteTask} />
      ))}
    </div>
  );
}
