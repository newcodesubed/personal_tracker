function TaskForm() {
  return (
    <header>
      <form>
        <input type="text" placeholder="Enter your task" />
        <div>
          <button className="bg-red-700 rounded-xl p-2 ">1</button>
          <button className="bg-orange-500 rounded-xl p-2">2</button>
          <button className="bg-amber-400 rounded-xl p-2">3</button>

          <select>
            <option value="todo">To Do</option>
            <option value="doing">Doing</option>
            <option value="done">Done</option>
          </select>
          <button type="submit" className="bg-blue-500">
            +Add Task
          </button>
        </div>
      </form>
    </header>
  );
}

export default TaskForm;
