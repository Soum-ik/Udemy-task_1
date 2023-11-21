import TagButton from "../src/components/TagButton";
import { MdDeleteForever } from "react-icons/md";
const TaskCard = ({ title, tags }) => {
  console.log(tags);
  return (
    <article className=" border px-3 py-2 min-w-[300px]">
      <h1 className=" text-[23px]">{title}</h1>
      <div className="flex items-center justify-between pt-10">
        <div className=" grid grid-cols-2 gap-3">
          {tags.map((tag, index) => {
            return <TagButton key={index} tagName={tag} />;
          })}

          {/* <TagButton tagName={"CSS"} /> */}
        </div>
        <MdDeleteForever color={"red"} size={30} />
      </div>
    </article>
  );
};
export default TaskCard;
