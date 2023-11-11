import React from "react";
import "./UserTask.css"; // Import your CSS file

const UserTask = ({ taskName }) => {
  const handleDragStart = (e) => {
    e.dataTransfer.setData("text/plain", taskName);
  };

  return (
    <div className="user-task" draggable="true" onDragStart={handleDragStart}>
      <div>
        <h1>{taskName}</h1>
        <button>Edit</button>
      </div>
    </div>
  );
};

export default UserTask;
