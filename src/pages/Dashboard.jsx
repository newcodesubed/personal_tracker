import { useEffect } from "react";
import GridTable from "../components/grid/GridTable";
import TodoList from "../components/todo/todoList";
import { getTask } from "../services/apiTask";

function Dashboard() {
  useEffect(function () {
    getTask().then((data) => console.log(data));
  }, []);
  return (
    <div>
      <h1>Dashboard</h1>

      <TodoList />
    </div>
  );
}

export default Dashboard;
