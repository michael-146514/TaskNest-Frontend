import React, { useState } from "react";
import UserTask from "../Tasks/UserTask";

const UserCategories = () => {
  const initialTasks = [
    "Task 1",
    "Task 2",
    "Task 3",
    "Task 4",
    "Task 5",
    "Task 6",
  ];
  const [tasks, setTasks] = useState(initialTasks);

  const handleDragStart = (index) => (e) => {
    e.dataTransfer.setData("text/plain", index);
  };

  const handleDrop = (index) => (e) => {
    e.preventDefault();

    const draggedIndex = e.dataTransfer.getData("text/plain");
    const newTasks = [...tasks];
    const [draggedTask] = newTasks.splice(draggedIndex, 1);
    newTasks.splice(index, 0, draggedTask);

    setTasks(newTasks);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className="user-categories">
      <h1>Name</h1>
      <div>
        {tasks.map((task, index) => (
          <div
            key={index}
            onDragOver={handleDragOver}
            onDrop={handleDrop(index)}
          >
            <UserTask taskName={task} onDragStart={handleDragStart(index)} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserCategories;
