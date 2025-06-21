import Tag from "./Tag";

const TaskForm = ({ setTasks }) => {
  const [taskData, setTaskData] = useState({
    task: "",
    status: "todo",
    tags: [],
  });

  console.log("Task Data :", taskData);

  const checkTag = (tag) => {
    return taskData.tags.some((item) => item === tag);
  };

  const selectTag = (tag) => {
    if (taskData.tags.some((item) => item === tag)) {
      const filterTags = taskData.tags.filter((item) => item !== tag);
      setTaskData((prev) => {
        return { ...prev, tags: filterTags };
      });
    } else {
      setTaskData((prev) => {
        return { ...prev, tags: [...prev.tags, tag] };
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setTaskData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(taskData);
    setTasks((prev) => {
      return [...prev, taskData];
    });
    setTaskData({
      task: "",
      status: "todo",
      tags: [],
    });
  };
  return (
    <header className="flex items-center justify-center border-b border-[#dcdcdc]">
      <form className="w-[40%]" onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          value={taskData.task}
          className="text-[20px] font-medium bg-[#f9f9f9] text-black border border-[#dfe3e6] rounded-[5px] px-[12px] py-[8px] mb-[15px] w-full placeholder:text-[#686868]"
          placeholder="Enter your task"
          onChange={handleChange}
        />

        <div className="flex items-center justify-between">
          <div>
            <Tag
              tagName="HTML"
              selectTag={selectTag}
              selected={checkTag("HTML")}
            />
            <Tag
              tagName="CSS"
              selectTag={selectTag}
              selected={checkTag("CSS")}
            />
            <Tag
              tagName="JavaScript"
              selectTag={selectTag}
              selected={checkTag("JavaScript")}
            />
            <Tag
              tagName="React"
              selectTag={selectTag}
              selected={checkTag("React")}
            />
          </div>

          <div>
            <select
              name="status"
              value={taskData.status}
              className="text-[16px] font-medium border border-[#999] rounded-[5px] w-[120px] h-[40px] px-[5px]"
              onChange={handleChange}
            >
              <option value="todo">To do</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
            </select>
            <button
              type="submit"
              className="text-[16px] font-medium bg-[#6457f9] text-white rounded-[5px] h-[40px] px-[13px] py-[3px] ml-[10px] border-none cursor-pointer"
            >
              + Add Task
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;
