import React, { useState } from "react";
import "./detailsForm.css";

const DetailsForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      taskTitle: title,
      taskDescription: description,
      completed: false
    };
    setTasks([...tasks, newTask]);
    setTitle("");
    setDescription("");
  };

  const handleDelete = (index, type) => {
    if (type === "tasks") {
      const updatedTasks = [...tasks];
      updatedTasks.splice(index, 1);
      setTasks(updatedTasks);
    } else if (type === "completed") {
      const updatedCompletedTasks = [...completedTasks];
      updatedCompletedTasks.splice(index, 1);
      setCompletedTasks(updatedCompletedTasks);
    }
  };

  const handleComplete = (index) => {
    const updatedTasks = [...tasks];
    const completedTask = updatedTasks.splice(index, 1)[0];
    completedTask.completed = true;
    setCompletedTasks([...completedTasks, completedTask]);
    setTasks(updatedTasks);
  };

  return (
    <div className="form-container">
      <div className="form-box">
        <h2>Enter task details</h2>
        <form onSubmit={handleSubmit} className="tasks-details-form">
          <input
            type="text"
            placeholder="Title"
            className="task-title"
            value={title}
            onChange={handleTitleChange}
          />
          <input
            type="text"
            placeholder="Description"
            className="task-description"
            value={description}
            onChange={handleDescriptionChange}
          />
          <button type="submit" className="task-form-btn">
            Submit
          </button>
        </form>
      </div>
      <div className="task-list">
        <h2>Task List</h2>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              <input
                type="checkbox"
                className="complete-checkbox"
                onChange={() => handleComplete(index)}
              />
              <strong>{task.taskTitle}</strong>: {task.taskDescription}
              <button className="delete-btn" onClick={() => handleDelete(index, "tasks")}>
                &#10006;
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="completed-tasks">
        <h2>Tasks Completed</h2>
        <ul>
          {completedTasks.map((task, index) => (
            <li key={index}>
              <span role="img" aria-label="Completed">&#10004;</span>
              <strong>{task.taskTitle}</strong>: {task.taskDescription}
              <button className="delete-btn" onClick={() => handleDelete(index, "completed")}>
                &#10006;
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DetailsForm;
