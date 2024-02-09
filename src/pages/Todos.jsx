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
          />
          <label htmlFor="task">Enter task</label>
        </div>
        <div className="form-floating mb-3">
          <select className="form-select pt-1" value={newTaskPriority}>
            {priorities.map((priority) => (
              <option key={priority.id} value={priority.label}>
                {priority.label}
              </option>
            ))}
          </select>
        </div>
        <button className="btn btn-primary rounded-pill">Add Task</button>
      </div>
    </div>
  );
};

export default Todos;
