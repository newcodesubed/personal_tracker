import Tag from "./Tag";
import deleteIcon from "../assets/delete.png";

const TaskCard = ({ title, tags, handleDelete, index }) => {
  return (
    <article className="w-full min-h-[100px] border border-[#dcdcdc] rounded-[10px] p-[15px] my-[15px]">
      <p className="text-[18px] font-semibold mb-[15px]">{title}</p>

      <div className="flex items-center justify-between">
        <div>
          {tags.map((tag, index) => (
            <Tag key={index} tagName={tag} selected />
          ))}
        </div>
        <div
          className="group w-[35px] h-[35px] rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#ebebeb]"
          onClick={() => handleDelete(index)}
        >
          <img
            src={deleteIcon}
            className="w-[20px] opacity-50 transition-all duration-300 ease-in-out group-hover:opacity-80"
            alt=""
          />
        </div>
      </div>
    </article>
  );
};

export default TaskCard;
