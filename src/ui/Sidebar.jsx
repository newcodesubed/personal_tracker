import MainNav from "./MainNav";

function Sidebar() {
  return (
    <aside
      className="bg-grey-0
  px-6 py-8
  border-r border-grey-100
  row-span-full
  flex flex-col gap-8 w-fit
"
    >
      <MainNav />
    </aside>
  );
}

export default Sidebar;
