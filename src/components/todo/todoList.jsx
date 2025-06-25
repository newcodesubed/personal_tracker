// import React, { useState, useEffect } from "react";

// import TaskForm from "./TaskForm";
// import TaskColumn from "./TaskColumn";
// import todoIcon from "../../assets/direct-hit.png";
// import doingIcon from "../../assets/glowing-star.png";
// import doneIcon from "../../assets/check-mark-button.png";
// import GridTable from "../grid/GridTable";

// const oldTasks = localStorage.getItem("tasks");

// const TodoList = () => {
//   const [tasks, setTasks] = useState(JSON.parse(oldTasks) || []);

//   useEffect(() => {
//     localStorage.setItem("tasks", JSON.stringify(tasks));
//   }, [tasks]);

//   const handleDelete = (taskIndex) => {
//     const newTasks = tasks.filter((task, index) => index !== taskIndex);
//     setTasks(newTasks);
//   };

//   return (
//     <div className="grid grid-rows-[150px_auto]">
//       <TaskForm setTasks={setTasks} />
//       <GridTable />
//       <main className="flex justify-evenly px-[8%] py-[20px]">
//         <TaskColumn
//           title="To do"
//           icon={todoIcon}
//           tasks={tasks}
//           status="todo"
//           handleDelete={handleDelete}
//         />
//         <TaskColumn
//           title="Doing"
//           icon={doingIcon}
//           tasks={tasks}
//           status="doing"
//           handleDelete={handleDelete}
//         />
//         <TaskColumn
//           title="Done"
//           icon={doneIcon}
//           tasks={tasks}
//           status="done"
//           handleDelete={handleDelete}
//         />
//       </main>
//     </div>
//   );
// };

// export default TodoList;
import { useState } from "react";
import { DndContext, closestCorners, DragOverlay } from "@dnd-kit/core";
import Column from "./Column";
import InputForm from "./Input";
import GridTable from "../grid/GridTable";

export default function TodoList() {
  const [columns, setColumns] = useState([
    {
      id: "col-1",
      title: "To Do",
      tasks: [
        { id: "task-1", content: "Buy groceries" },
        { id: "task-2", content: "Walk the dog" },
      ],
    },
    {
      id: "col-2",
      title: "In Progress",
      tasks: [{ id: "task-3", content: "Read a book" }],
    },
    {
      id: "col-3",
      title: "Done",
      tasks: [{ id: "task-4", content: "Do laundry" }],
    },
  ]);

  const [activeId, setActiveId] = useState(null);
  const [newTaskContent, setNewTaskContent] = useState("");
  const [selectedColumnId, setSelectedColumnId] = useState(columns[0].id);

  function findTask(id) {
    for (const col of columns) {
      const task = col.tasks.find((t) => t.id === id);
      if (task) return { task, columnId: col.id };
    }
    return null;
  }

  function handleDragStart(event) {
    setActiveId(event.active.id);
  }

  function handleDragEnd(event) {
    const { active, over } = event;
    setActiveId(null);
    if (!over || active.id === over.id) return;

    const activeInfo = findTask(active.id);
    if (!activeInfo) return;

    const overColumn = columns.find((col) => col.id === over.id);
    const overTaskInfo = findTask(over.id);

    setColumns((cols) => {
      let newCols = [...cols];

      const fromColIndex = newCols.findIndex(
        (c) => c.id === activeInfo.columnId
      );
      newCols[fromColIndex] = {
        ...newCols[fromColIndex],
        tasks: newCols[fromColIndex].tasks.filter((t) => t.id !== active.id),
      };

      if (overColumn) {
        const toColIndex = newCols.findIndex((c) => c.id === overColumn.id);
        newCols[toColIndex] = {
          ...newCols[toColIndex],
          tasks: [...newCols[toColIndex].tasks, activeInfo.task],
        };
      } else if (overTaskInfo) {
        const toColIndex = newCols.findIndex(
          (c) => c.id === overTaskInfo.columnId
        );
        const taskIndex = newCols[toColIndex].tasks.findIndex(
          (t) => t.id === over.id
        );
        const newTasks = [...newCols[toColIndex].tasks];
        newTasks.splice(taskIndex, 0, activeInfo.task);
        newCols[toColIndex] = {
          ...newCols[toColIndex],
          tasks: newTasks,
        };
      }

      return newCols;
    });
  }

  function handleAddTask(e) {
    e.preventDefault();
    const trimmed = newTaskContent.trim();
    if (!trimmed) return;

    setColumns((cols) => {
      const colIndex = cols.findIndex((c) => c.id === selectedColumnId);
      if (colIndex === -1) return cols;

      const newTaskId = `task-${Date.now()}`;
      const newTask = { id: newTaskId, content: trimmed };

      const newCols = [...cols];
      newCols[colIndex] = {
        ...newCols[colIndex],
        tasks: [...newCols[colIndex].tasks, newTask],
      };

      return newCols;
    });

    setNewTaskContent("");
  }

  return (
    <>
      <InputForm
        columns={columns}
        selectedColumnId={selectedColumnId}
        newTaskContent={newTaskContent}
        setNewTaskContent={setNewTaskContent}
        setSelectedColumnId={setSelectedColumnId}
        handleAddTask={handleAddTask}
      />
      <GridTable />
      <DndContext
        collisionDetection={closestCorners}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <div
          style={{
            display: "flex",
            padding: 20,
            backgroundColor: "#222",
            height: "calc(100vh - 80px)",
            overflowX: "auto",
          }}
        >
          {columns.map((col) => (
            <Column key={col.id} column={col} onDeleteTask={handleDeleteTask} />
          ))}
        </div>

        <DragOverlay>
          {activeId ? (
            <div
              style={{
                padding: 8,
                backgroundColor: "#444",
                borderRadius: 4,
                color: "white",
                width: 200,
              }}
            >
              {findTask(activeId)?.task.content}
            </div>
          ) : null}
        </DragOverlay>
      </DndContext>
    </>
  );
}
