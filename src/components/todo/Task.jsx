import { useDraggable } from "@dnd-kit/core";

export default function Task({ task, onDelete }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useDraggable({
    id: task.id,
  });

  const style = {
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
    transition,
    opacity: isDragging ? 0.5 : 1,
    padding: 8,
    marginBottom: 8,
    backgroundColor: "#444",
    borderRadius: 4,
    cursor: "grab",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "white",
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <span>{task.content}</span>
      <button
        onClick={() => onDelete(task.id)}
        style={{
          marginLeft: 8,
          background: "transparent",
          border: "none",
          color: "red",
          fontWeight: "bold",
          cursor: "pointer",
        }}
        title="Delete task"
      >
        🗑️
      </button>
    </div>
  );
}
