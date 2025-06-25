import { useState } from "react";
import MainNav from "./MainNav";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi2";

function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`
        ${collapsed ? "w-20" : "w-64"}
        bg-white border-r border-gray-200
        px-4 py-6 h-screen shadow-sm
        flex flex-col justify-between transition-all duration-300
      `}
    >
      <div>
        {/* Header / Logo */}
        <div className="flex items-center justify-between mb-6">
          {!collapsed && (
            <div className="text-lg font-semibold text-brand-600 px-2">
              MyApp
            </div>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-1 text-gray-500 hover:text-gray-800 transition"
          >
            {collapsed ? <HiOutlineChevronRight /> : <HiOutlineChevronLeft />}
          </button>
        </div>

        <MainNav collapsed={collapsed} />
      </div>

      {/* Optional: Profile or Logout */}
      <div className="px-2 text-sm text-gray-500">
        {collapsed ? (
          <div className="text-center">👤</div>
        ) : (
          <div className="flex items-center justify-between">
            <span>Logged in</span>
            <button className="text-brand-600 hover:underline">Logout</button>
          </div>
        )}
      </div>
    </aside>
  );
}

export default Sidebar;
