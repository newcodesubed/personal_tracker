export default function InputForm({
  columns,
  selectedColumnId,
  newTaskContent,
  setNewTaskContent,
  setSelectedColumnId,
  handleAddTask,
}) {
  return (
    <form
      onSubmit={handleAddTask}
      style={{
        display: "flex",
        padding: 20,
        backgroundColor: "#222",
        alignItems: "center",
        gap: 8,
      }}
    >
      <input
        type="text"
        placeholder="New task"
        value={newTaskContent}
        onChange={(e) => setNewTaskContent(e.target.value)}
        style={{
          flexGrow: 1,
          padding: 8,
          borderRadius: 4,
          border: "none",
          fontSize: 16,
        }}
      />
      <select
        value={selectedColumnId}
        onChange={(e) => setSelectedColumnId(e.target.value)}
        style={{
          padding: 8,
          borderRadius: 4,
          border: "none",
          fontSize: 16,
        }}
      >
        {columns.map((col) => (
          <option key={col.id} value={col.id}>
            {col.title}
          </option>
        ))}
      </select>
      <button
        type="submit"
        style={{
          padding: "8px 16px",
          borderRadius: 4,
          border: "none",
          backgroundColor: "#00b894",
          color: "white",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Add
      </button>
    </form>
  );
}
