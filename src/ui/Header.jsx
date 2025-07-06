// import { IoSearchCircleOutline } from "react-icons/io5";
import { BiSearch } from "react-icons/bi";
import { LuBell } from "react-icons/lu";

function Header() {
  return (
    <header className="bg-grey-0 px-[4.8rem] py-[1.2rem] border-b border-[var(--color-grey-100)]">
      <div className="flex gap-5 justify-between items-center">
        <div className=" flex w-5/6 bg-amber-400 rounded-xl justify-between p-2 items-center">
          <div className="">search bar</div>
          <div className="">
            <BiSearch />
          </div>
        </div>
        <div
          className="flex
        gap-3"
        >
          <div className="border-b-2 rounded-2xl">
            <LuBell />
          </div>
          <div>user profile</div>
        </div>
      </div>
    </header>
  );
}

export default Header;
