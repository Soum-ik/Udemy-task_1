import React, { useState } from "react";
import Header from "./components/header";
import TaskCoulumn from "./taskColume";
import { FiTarget } from "react-icons/fi";
import { AiOutlineGitlab } from "react-icons/ai";
import { MdOutlineDone } from "react-icons/md";

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <div>
      <Header setTasks={setTasks} />
      <hr />
      <div className=" flex items-center justify-evenly pt-20">
        <TaskCoulumn
          icon={<FiTarget color=" blue" size={30} />}
          tagName={"To do"}
          value={tasks}
          status="To do"
        />
        <TaskCoulumn
          icon={<AiOutlineGitlab color=" yellow" size={30} />}
          tagName={"Doing"}
          value={tasks}
          status="Doing"
        />
        <TaskCoulumn
          icon={<MdOutlineDone color=" green" size={40} />}
          tagName={"Done"}
          value={tasks}
          status="Done"
        />
      </div>
    </div>
  );
}

export default App;
