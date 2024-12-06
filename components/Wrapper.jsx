"use client";
import React, { useEffect } from "react";
import AddTask from "./AddTask";
import Tasks from "./Tasks";
import { Card } from "./ui/card";
import { useTaskStore } from "@/Store/TaskStore";

const Wrapper = () => {
  const { fetchFromLocalStorage } = useTaskStore();
  useEffect(() => {
    fetchFromLocalStorage();
  }, []);
  return (
    <Card className="w-[350px] sm:w-[500px] mx-auto">
      <AddTask />
      <Tasks />
    </Card>
  );
};

export default Wrapper;
