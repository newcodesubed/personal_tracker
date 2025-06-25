import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

function AppLayout() {
  return (
    <div className="grid h-screen grid-cols-[auto_1fr] grid-rows-[auto_1fr] grid-areas-layout">
      {/* Sidebar in first column, spans all rows */}
      <div className="row-span-2">
        <Sidebar />
      </div>

      {/* Header in top-right */}
      <div className="col-start-2 row-start-1 z-10">
        <Header />
      </div>

      {/* Main content below header, right of sidebar */}
      <main className="col-start-2 row-start-2 bg-gray-50 p-6 overflow-y-auto">
        <div className="max-w-[120rem] mx-auto flex flex-col gap-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default AppLayout;
