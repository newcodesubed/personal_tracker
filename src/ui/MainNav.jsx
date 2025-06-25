import React from "react";
import { NavLink } from "react-router-dom";

import {
  HiOutlineHome,
  HiOutlineChartPie,
  HiOutlineCog6Tooth,
} from "react-icons/hi2";
import { LuNotebookPen } from "react-icons/lu";

function MainNav({ collapsed }) {
  return (
    <nav>
      <ul className="flex flex-col gap-2">
        <li>
          <CustomNavLink
            to="/dashboard"
            icon={<HiOutlineHome />}
            label="Home"
            collapsed={collapsed}
          />
        </li>
        <li>
          <CustomNavLink
            to="/fulltask"
            icon={<LuNotebookPen />}
            label="Task"
            collapsed={collapsed}
          />
        </li>
        <li>
          <CustomNavLink
            to="/chats"
            icon={<HiOutlineChartPie />}
            label="Charts"
            collapsed={collapsed}
          />
        </li>
        <li>
          <CustomNavLink
            to="/settings"
            icon={<HiOutlineCog6Tooth />}
            label="Settings"
            collapsed={collapsed}
          />
        </li>
      </ul>
    </nav>
  );
}

function CustomNavLink({ to, icon, label, collapsed }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => {
        const baseClasses = `
          group flex items-center gap-4
          px-3 py-2
          text-sm font-medium rounded-md
          transition-all duration-200 relative
        `;
        const activeClasses = "bg-gray-100 text-gray-900";
        const hoverClasses = "hover:bg-gray-50 hover:text-gray-900";
        return `${baseClasses} ${isActive ? activeClasses : "text-gray-600"} ${hoverClasses}`;
      }}
    >
      {/* Icon */}
      {React.cloneElement(icon, {
        className:
          "w-5 h-5 text-gray-400 transition-colors duration-200 group-hover:text-brand-600",
      })}

      {/* Label or Tooltip */}
      {!collapsed ? (
        <span>{label}</span>
      ) : (
        <span
          className="absolute left-full ml-2 px-2 py-1 text-xs text-white bg-gray-900 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
        >
          {label}
        </span>
      )}
    </NavLink>
  );
}

export default MainNav;
