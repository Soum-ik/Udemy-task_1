import TaskCard from "./taskCard";

const TaskCoulumn = ({ tagName, icon, value, status }) => {
  return (
    <section>
      <h1 className="pb-10 text-[28px] font-semibold flex items-center justify-center gap-2">
        {icon} {tagName}
      </h1>
      {value && value.length > 0 ? (
        value.map((task, index) => {
          // Check if task has the specified status (case-insensitive and trim whitespace)
          if (
            task.status.trim().toLowerCase() === status.trim().toLowerCase()
          ) {
            return (
              <TaskCard
                key={index}
                title={task.task}  // Pass task title as a prop
                tags={task.tags}   // Pass task tags as a prop
              />
            );
          }
          return null;
        })
      ) : (
        <p>No tasks available</p>
      )}
    </section>
  );
};

export default TaskCoulumn;
