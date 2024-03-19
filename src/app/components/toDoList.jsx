import React from "react";
import ToDoTask from "./toDoTask";

export default function ToDoList({ tasks, handleDeleteTask, handleUpdateTask }) {
  const handleEditTask = (taskId) => {
    const taskToUpdate = tasks.find((task) => task.id === taskId); 
    handleUpdateTask(taskToUpdate); 
  };

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <ToDoTask
          key={task.id}
          task={task}
          handleDeleteTask={handleDeleteTask}
          handleUpdateTask={handleEditTask} 
        />
      ))}
    </div>
  );
}
