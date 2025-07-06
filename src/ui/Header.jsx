// import { IoSearchCircleOutline } from "react-icons/io5";
import { BiSearch } from "react-icons/bi";
import { LuBell } from "react-icons/lu";

function Header() {
  return (
    <header className="bg-grey-0 px-[4.8rem] py-[1.2rem] border-b border-[var(--color-grey-100)]">
      <div className="flex gap-5 justify-between items-center">
        <div className=" flex w-5/6 bg-amber-400 rounded-4xl justify-between p-2 items-center">
          <div className="pl-2">search bar</div>
          <div className="p-2 border-2 rounded-4xl">
            <BiSearch />
          </div>
        </div>
        <div
          className="flex items-center
        gap-3"
        >
          <div className=" p-3 border-2 rounded-4xl">
            <LuBell />
          </div>
          <div className="flex items-center  border-2 rounded-4xl  pl-0.5 ">
            <img
              src="https://i.pravatar.cc/40?img=2"
              alt="user image"
              className="w-9 h-9 rounded-full object-cover "
            />
            <div className="pr-3 pl-0.5">
              <div className="text-stone-900 font-semibold mb-0">
                Subed Shah
              </div>
              <div className="text-xs text-stone-400 mt-0">
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
