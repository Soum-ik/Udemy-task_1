import { useState } from "react";
import TagButton from "./TagButton";

const Header = ({ setTasks }) => {
  const [taskData, setTaskData] = useState({
    task: "",
    status: "todo",
    tags: [],
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setTaskData((prev) => {
      return { ...prev, [name]: value };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setTasks((prev) => {
      return [...prev, taskData];
    });
  }

  function selectTag(tag) {
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
  }


  return (
    <div className=" flex items-center flex-col justify-center pt-10 pb-10 ">
      <form onSubmit={handleSubmit} className=" min-w-[600px] relative">
        <input
          className={` w-full bg-slate-100 rounded-sm border outline-none focus:ring-1  focus:ring-offset-2 py-2 px-3 text-[15px] text-slate-600 font-medium`}
          type="text"
          name="task"
          placeholder="Add your task"
          onChange={handleChange}
        />
        <div className=" grid grid-cols-3 gap-4 pt-5 ">
          <div className=" grid grid-flow-col gap-1 col-span-2 cursor-pointer">
            <TagButton selectTag={selectTag} tagName={"HTML"} />
            <TagButton selectTag={selectTag} tagName={"CSS"} />
            <TagButton selectTag={selectTag} tagName={"JAVASCRIPT"} />
            <TagButton selectTag={selectTag} tagName={"REACT"} />
          </div>
          <div className=" col-span-1 absolute  right-0 cursor-pointer">
            <select
              onChange={handleChange}
              name="status"
              className=" outline-none border py-2 px-3 rounded-md"
            >
              <option value="To do">To do</option>
              <option value="Done">Done</option>
              <option value="Doing">Doing</option>
            </select>
            <button type="submit" className=" border  rounded mx-2 py-2 px-3">
              Add Task{" "}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Header;
