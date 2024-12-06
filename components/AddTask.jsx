"use client";
import { Input } from "./ui/input";
import { CardHeader } from "./ui/card";
import ButtonHoverMessage from "./ButtonHoverMessage";
import { useTaskStore } from "@/Store/TaskStore";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const AddTask = () => {
  const { toast } = useToast();
  const [task, setTask] = useState(""); // Renamed `Tasks` to `task` for clarity
  const { addSingleTask } = useTaskStore(); // Renamed AddSingleTask to addSingleTask for consistency

  // Handle changes to input
  const handleOnChange = (value) => {
    setTask(value);
  };

  // Handle form submission
  const handleOnSubmit = async () => {
    if (task.trim() === "") {
      toast({
        variant: "destructive",
        title: "Task Cannot be Empty",
      });
      return; // Stop execution if task is empty
    }

    // Add task to the store and reset input field
    await addSingleTask({ name: task });
    toast({
      title: "Task Added Sucessfully",
    });
    setTask(""); // Reset task input after submission
  };

  return (
    <CardHeader className="flex flex-row gap-3 justify-between items-baseline">
      <Input
        placeholder="Add Task..."
        name="Task"
        className="h-11"
        type="text"
        value={task}
        onChange={(e) => handleOnChange(e.target.value)}
      />
      <ButtonHoverMessage
        Event={handleOnSubmit}
        size="lg"
        icon="ADD"
        message="Enter the Task to add"
      />
    </CardHeader>
  );
};

export default AddTask;
