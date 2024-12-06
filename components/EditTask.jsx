import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ButtonHoverMessage from "@/components/ButtonHoverMessage";
import { useTaskStore } from "@/Store/TaskStore";
import { toast } from "@/hooks/use-toast";
import { useState } from "react";

export function EditTask({ task, taskId }) {
  const [Task, setTask] = useState("");
  const { editTask } = useTaskStore();

  const handleOnChange = (value) => {
    setTask(value);
  };

  const handleEditTask = async () => {
    if (task==="") {
      toast({
        variant: "destructive",
        title: "Task Cannot be Empty",
      });
      return; // Stop execution if task is empty
    }

    // Add task to the store and reset input field
    editTask(taskId, Task);
    toast({
      title: "Task Edited Sucessfully",
    });
    setTask(""); // Reset task input after submission
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm">✒️</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Task</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="task" className="text-right">
              TASK
            </Label>
            <Input id="task" defaultValue={task}  onChange={(e)=>{handleOnChange(e.target.value)}}  className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <ButtonHoverMessage
            size="sm"
            Event={() => handleEditTask()}
            icon="✅"
            message="save"
          />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
