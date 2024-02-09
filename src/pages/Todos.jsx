import { useState } from "react";

const initialTasks = [
  { id: 1, title: "Task 1", status: "incomplete", priority: "low" },
  { id: 2, title: "Task 2", status: "incomplete", priority: "medium" },
  { id: 3, title: "Task 3", status: "completed", priority: "high" },
];
const priorities = [
  { id: 1, label: "Low" },
  { id: 2, label: "Medium" },
  { id: 3, label: "High" },
];

const Todos = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [totalTasks, setTotalTasks] = useState(initialTasks.length);
  const [completedTasks, setCompletedTasks] = useState(
    initialTasks.filter((task) => task.status === "completed").length
  );

  const [newtaskTitle, setNewTaskTitle] = useState("");
  const [newTaskPriority, setNewTaskPriority] = useState("low");
  const [editTaskId, setEditTaskId] = useState(null);
  const [editedTaskTitle, setEditedTaskTitle] = useState("");

  const handleAddedTask = () => {
    if (newtaskTitle.trim() === "") {
      alert("Can't add with empty title");
    } else {
      const newTask = {
        id: tasks.length + 1,
        title: newtaskTitle,
        status: "incomplete",
        priority: newTaskPriority,
      };
      setTasks([...tasks, newTask]);
      setNewTaskTitle("");
      setTotalTasks(totalTasks + 1);
    }
  };

  const handleEditClick = (id, title) => {
    setEditTaskId(id);
    setEditedTaskTitle(title);
  };

  const handleEditTask = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, title: editedTaskTitle } : task
    );
    setTasks(updatedTasks);
    setEditTaskId(null);
  };

  return (
    <div className="container py-5">
      <h3 className="font-bold">Todulo - Todo List</h3>
      <p className="mb-2 text-decoration-underline">
        Total Tasks: {totalTasks}
      </p>
      <p className="text-decoration-underline">
        Completed Tasks: {completedTasks}
      </p>
      <h4 className="mb-2 ">Enter your task:</h4>
      <div className="mb-4">
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter task"
            value={newtaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
          />
          <label htmlFor="task">Enter task</label>
        </div>
        <div className="form-floating mb-3">
          <select
            className="form-select pt-1"
            value={newTaskPriority}
            onChange={(e) => setNewTaskPriority(e.target.value)}
          >
            {priorities.map((priority) => (
              <option key={priority.id} value={priority.label}>
                {priority.label}
              </option>
            ))}
          </select>
        </div>
        <button
          className="btn btn-primary rounded-pill"
          onClick={handleAddedTask}
        >
          Add Task
        </button>
      </div>

      <div className="mt-4 text-decoration-none">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="d-md-flex justify-content-md-between border-bottom py-2"
          >
            {editTaskId === task.id ? (
              <div className="form">
                <input
                  type="text"
                  value={editedTaskTitle}
                  onChange={(e) => setEditedTaskTitle(e.target.value)}
                  className="form-control"
                />
              </div>
            ) : (
              <h2
                className={`font-bold mb-3 
                    ${
                      task.priority === "low"
                        ? "text-primary"
                        : task.priority === "medium"
                        ? "text-warning"
                        : "text-danger"
                    }
                    ${
                      task.status === "completed"
                        ? "text-decoration-line-through"
                        : "none"
                    }
                    `}
              >
                {task.title}
              </h2>
            )}
            <div className="gap-3 d-flex">
              {editTaskId === task.id ? (
                <button
                  onClick={() => handleEditTask(task.id)}
                  className="btn btn-outline-dark"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => handleEditClick(task.id, task.title)}
                  className="btn btn-dark"
                >
                  Edit
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todos;
