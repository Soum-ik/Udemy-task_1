import TaskCard from "./taskCard";

const TaskCoulumn = ({ tagName, icon }) => {
  return (
    <section>
      <h1 className=" pb-10 text-[28px] font-semibold flex items-center justify-center gap-2">
        {icon} {tagName}
      </h1 >
      <TaskCard />
    </section>
  );
};
export default TaskCoulumn;
