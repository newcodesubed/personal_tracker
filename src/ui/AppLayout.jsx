import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

function AppLayout() {
  return (
    <>
      <Sidebar />
      <div className="">
        <Outlet />
      </div>
    </>
  );
}

export default AppLayout;
