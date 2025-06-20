function TodoList() {
  return (
    <div className="grid grid-rows-[150px_auto]">
      <header>Header Section</header>
      <main className="flex justify-evenly pt-[20px] pb-[20px] px-[8%]">
        <section className="w-1/3 bg-amber-300 m-[20px]">Section 1</section>
        <section className="w-1/3 bg-amber-300 m-[20px]">Section 2</section>
        <section className="w-1/3 bg-amber-300 m-[20px]">Section 3</section>
      </main>
    </div>
  );
}

export default TodoList;
