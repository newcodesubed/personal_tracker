import { useDraggable } from "@dnd-kit/core";
import deleteIcon from "../../assets/delete.png";
export default function Task({ task, onDelete, columnId }) {
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
        onClick={(e) => {
          e.stopPropagation(); // Prevent drag activation
          e.preventDefault(); //  Prevent default browser behavior
          onDelete(task.id, columnId);
        }}
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
        <img
          src={deleteIcon}
          className="w-[20px] opacity-50 transition-all duration-300 ease-in-out group-hover:opacity-80"
          alt=""
        />
      </button>
    </div>
  );
}
