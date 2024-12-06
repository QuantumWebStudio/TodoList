import { create } from "zustand";

export const useTaskStore = create((set, get) => ({
  allTasks: [], // Initialize with an empty array

  // Fetch tasks from localStorage and set them
  fetchFromLocalStorage: () => {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    set({ allTasks: tasks });
  },

  // Mark task as complete by removing it from the list
  addTaskComplete: (id) => {
    set((state) => {
      const updatedTasks = state.allTasks.filter((task) => task.id !== id);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks)); // Save to localStorage
      return { allTasks: updatedTasks };
    });
  },

  // Edit task name by taskId
  editTask: (taskId, taskName) => {
    set((state) => {
      const updatedTasks = state.allTasks.map((task) =>
        task.id === taskId ? { ...task, name: taskName } : task
      );
      localStorage.setItem("tasks", JSON.stringify(updatedTasks)); // Save updated tasks to localStorage
      return { allTasks: updatedTasks };
    });
  },

  // Add a single task
  addSingleTask: (task) => {
    set((state) => {
      const newTask = { ...task, id: Date.now() }; // Generate a unique ID based on the current timestamp
      const updatedTasks = [...state.allTasks, newTask];
      localStorage.setItem("tasks", JSON.stringify(updatedTasks)); // Save to localStorage
      return { allTasks: updatedTasks };
    });
  },
}));
