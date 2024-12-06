"use client";
import { CardContent, CardTitle } from "./ui/card";
import { useTaskStore } from "@/Store/TaskStore";
import ButtonHoverMessage from "./ButtonHoverMessage";
import { toast } from "@/hooks/use-toast";
import { EditTask } from "./EditTask";

const Tasks = () => {
  const { allTasks, addTaskComplete } = useTaskStore();

  const handleCompleTask = (id) => {
    addTaskComplete(id);
    toast({
      title: "Task Completed Sucessfully",
    });
  };

  return (
    <CardContent>
      <CardTitle className="text-center text-3xl pb-6">Tasks</CardTitle>
      {allTasks.map((task) => (
        <div
          key={task.id}
          className="flex  flex-row justify-between items-center"
        >
          <CardContent>
            <CardTitle>{task.name}</CardTitle>
          </CardContent>
          <CardContent className=" flex flex-row justify-between items-center gap-2">
            <EditTask task={task.name} taskId={task.id} />
            <ButtonHoverMessage
              size="sm"
              Event={() => handleCompleTask(task.id)}
              icon="✅"
              message="Delete"
            />
          </CardContent>
        </div>
      ))}
    </CardContent>
  );
};

export default Tasks;
