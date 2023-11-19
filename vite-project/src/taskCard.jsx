import TagButton from "../src/components/TagButton";
import { MdDeleteForever } from "react-icons/md";
const TaskCard = () => {
  return (
    <article className=" border px-3 py-2 min-w-[300px]">
      <h1 className=" text-[23px]">Task</h1>
      <div className="flex items-center justify-between pt-10">
        <div className=" grid grid-cols-2 gap-3">
          <TagButton tagName={"HTML"} />
          <TagButton tagName={"CSS"} />
        </div>
        <MdDeleteForever color="red" size={30} />
      </div>
    </article>
  );
};
export default TaskCard;
