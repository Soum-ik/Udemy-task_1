import { useState } from "react";
import TagButton from "./TagButton";

const Header = () => {
  const [task, setTask] = useState("");

  return (
    <div className=" flex items-center flex-col justify-center pt-10 pb-10 ">
      <div className=" min-w-[600px] relative">
        <input
          className={` w-full bg-slate-100 rounded-sm border outline-none focus:ring-1  focus:ring-offset-2 py-2 px-3 text-[15px] text-slate-600 font-medium`}
          type="text"
          placeholder="Add your task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <div className=" grid grid-cols-3 gap-4 pt-5 ">
          <div className=" grid grid-flow-col gap-1 col-span-2 cursor-pointer">
            <TagButton tagName={"HTML"}/>
            <TagButton tagName={"CSS"}/>
            <TagButton tagName={"JAVASCRIPT"}/>
            <TagButton tagName={"REACT "}/>
          </div>
          <div className=" col-span-1 absolute  right-0 cursor-pointer">
            <select className=" outline-none border py-2 px-3 rounded-md">
              <option value="Doing">Doing</option>
              <option value="Done">Done</option>
              <option value="To Do">To Do</option>
            </select>
            <button className=" border  rounded mx-2 py-2 px-3">
              Add Task{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
