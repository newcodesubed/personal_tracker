// import { IoSearchCircleOutline } from "react-icons/io5";
import { BiSearch } from "react-icons/bi";
import { LuBell } from "react-icons/lu";

function Header() {
  return (
    <header className="bg-grey-0 px-12 py-3 border-b border-[var(--color-grey-100)] dark:bg-gray-900 dark:border-gray-700">
      <div className="flex justify-between items-center gap-4">
        {/* Search bar */}
        <div className="flex w-5/6 bg-amber-400 rounded-4xl justify-between p-1.5 items-center">
          <div className="pl-2 text-black">search bar</div>
          <div className="p-2 border-2 rounded-4xl border-black/20 dark:border-white/20 text-black dark:text-white">
            <BiSearch />
          </div>
        </div>

        {/* Notification + User */}
        <div className="flex items-center gap-3">
          <div className="p-3 border-2 rounded-4xl border-black/20 dark:border-white/20 text-black dark:text-white">
            <LuBell />
          </div>
          <div className="flex items-center border-2 rounded-4xl pl-1 border-black/20 dark:border-white/20">
            <img
              src="https://i.pravatar.cc/40?img=2"
              alt="user"
              className="w-9 h-9 rounded-full object-cover"
            />
            <div className="pl-1 pr-3 leading-tight">
              <div className="text-stone-900 dark:text-white font-semibold text-sm leading-tight">
                Subed Shah
              </div>
              <div className="text-xs text-stone-400 dark:text-gray-400 whitespace-nowrap leading-tight">
                Software Developer
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
