import { useDroppable } from "@dnd-kit/core";
import Task from "./Task";

export default function Column({ column, onDeleteTask }) {
  const { setNodeRef, isOver } = useDroppable({ id: column.id });

  return (
    <div
      ref={setNodeRef}
      style={{
        backgroundColor: isOver ? "#555" : "#333",
        padding: 16,
        borderRadius: 6,
        width: 500,
        minHeight: 120,
        marginRight: 16,
        color: "white",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h3>{column.title}</h3>
      <div style={{ flexGrow: 1, marginTop: 8 }}>
        {column.tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDelete={onDeleteTask}
            columnId={column.id}
          />
        ))}
      </div>
    </div>
  );
}
