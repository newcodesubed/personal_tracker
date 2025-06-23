// import TaskForm from "./TaskForm";

// function TodoList() {
//   return (
//     <div className="grid grid-rows-[150px_auto]">
//       <TaskForm />
//       <main className="flex justify-evenly pt-[20px] pb-[20px] px-[8%]">
//         <section className="w-1/3 bg-amber-300 m-[20px]">Section 1</section>
//         <section className="w-1/3 bg-amber-300 m-[20px]">Section 2</section>
//         <section className="w-1/3 bg-amber-300 m-[20px]">Section 3</section>
//       </main>
//     </div>
//   );
// }

// export default TodoList;
import React, { useState, useEffect } from "react";

import TaskForm from "./TaskForm";
import TaskColumn from "./TaskColumn";
import todoIcon from "../../assets/direct-hit.png";
import doingIcon from "../../assets/glowing-star.png";
import doneIcon from "../../assets/check-mark-button.png";
import GridTable from "../grid/GridTable";

const oldTasks = localStorage.getItem("tasks");

const TodoList = () => {
  const [tasks, setTasks] = useState(JSON.parse(oldTasks) || []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((task, index) => index !== taskIndex);
    setTasks(newTasks);
  };

  return (
    <div className="grid grid-rows-[150px_auto]">
      <TaskForm setTasks={setTasks} />
      <GridTable />
      <main className="flex justify-evenly px-[8%] py-[20px]">
        <TaskColumn
          title="To do"
          icon={todoIcon}
          tasks={tasks}
          status="todo"
          handleDelete={handleDelete}
        />
        <TaskColumn
          title="Doing"
          icon={doingIcon}
          tasks={tasks}
          status="doing"
          handleDelete={handleDelete}
        />
        <TaskColumn
          title="Done"
          icon={doneIcon}
          tasks={tasks}
          status="done"
          handleDelete={handleDelete}
        />
      </main>
    </div>
  );
};

export default TodoList;
