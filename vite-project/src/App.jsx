import React from "react";
import Header from "./components/header";
import TaskCoulumn from "./taskColume";
import { FiTarget } from "react-icons/fi";
import { AiOutlineGitlab } from "react-icons/ai";
import { MdOutlineDone } from "react-icons/md";

function App() {
  return (
    <div>
      <Header />
      <hr />
      <div className=" flex items-center justify-evenly pt-20">
        <TaskCoulumn
          icon={<FiTarget color=" blue" size={30} />}
          tagName={"To do"}
        />
        <TaskCoulumn
          icon={<AiOutlineGitlab color=" yellow" size={30} />}
          tagName={"Doing"}
        />
        <TaskCoulumn
          icon={<MdOutlineDone color=" green" size={40} />}
          tagName={"Done"}
        />
      </div>
    </div>
  );
}

export default App;
