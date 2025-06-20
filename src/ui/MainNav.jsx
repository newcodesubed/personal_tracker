// function MainNav() {
//   return (
//     <nav>
//       <ul className="flex flex-col gap-0.8rem">
//         <li>
//           <StyledNavLink to="/dashboard">
//             <HiOutlineHome />
//             <span>Home</span>
//           </StyledNavLink>
//         </li>
//         <li>
//           <StyledNavLink to="/chats">
//             <HiOutlineCalendarDays /> <span>Chats</span>
//           </StyledNavLink>
//         </li>
//         <li>
//           <StyledNavLink to="/fulltask">
//             <HiOutlineHomeModern /> <span>Task</span>
//           </StyledNavLink>
//         </li>

//         <li>
//           <StyledNavLink to="/settings">
//             <HiOutlineCog6Tooth /> <span>Settings</span>
//           </StyledNavLink>
//         </li>
//       </ul>
//     </nav>
//   );
// }

// export default MainNav;
import React from "react";
import { NavLink } from "react-router-dom";

import {
  HiOutlineHome,
  HiOutlineChartPie,
  HiOutlineCog6Tooth,
} from "react-icons/hi2";
import { LuNotebookPen } from "react-icons/lu";
function MainNav() {
  return (
    <nav>
      <ul className="flex flex-col gap-2">
        <li>
          <CustomNavLink
            to="/dashboard"
            icon={<HiOutlineHome />}
            label="Home"
          />
        </li>

        <li>
          <CustomNavLink to="/fulltask" icon={<LuNotebookPen />} label="Task" />
        </li>
        <li>
          <CustomNavLink
            to="/chats"
            icon={<HiOutlineChartPie />}
            label="Charts"
          />
        </li>

        <li>
          <CustomNavLink
            to="/settings"
            icon={<HiOutlineCog6Tooth />}
            label="Settings"
          />
        </li>
      </ul>
    </nav>
  );
}

function CustomNavLink({ to, icon, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `
          flex items-center gap-5
          text-grey-600 text-base font-medium
          px-6 py-3
          transition-all duration-300
          ${isActive ? "text-grey-800 bg-grey-50 rounded-sm" : ""}
          hover:text-grey-800 hover:bg-grey-50 hover:rounded-sm
          group
        `
      }
    >
      {React.cloneElement(
        icon,
        "className" in icon.props
          ? {
              ...icon.props,
              className:
                "w-6 h-6 text-grey-400 transition-all duration-300 group-hover:text-brand-600",
            }
          : {
              className:
                "w-6 h-6 text-grey-400 transition-all duration-300 group-hover:text-brand-600",
            }
      )}
      <span>{label}</span>
    </NavLink>
  );
}

export default MainNav;
