import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

function AppLayout() {
  return (
    <>
      <div className="grid grid-cols-[auto_1fr] grid-rows-[auto_1fr] h-screen ">
        <Header />
        <Sidebar />
        <main
          className="bg-grey-50 pt-16  pb-24 pl-[4.6rem]
"
        >
          <div className="max-w-[120rem] mx-auto flex flex-col gap-8">
            <Outlet />
          </div>
        </main>
      </div>
    </>
  );
}

export default AppLayout;
