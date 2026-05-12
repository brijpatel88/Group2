<<<<<<< HEAD
// src/types/Task.ts
// Defines the shared TypeScript structure for all task data.

export type TaskPriority = "High" | "Medium" | "Low";
export type TaskStatus = "Pending" | "Completed";
export type TaskCategory = "Study" | "Assignments" | "Personal";

export interface StudyTask {
 id: string;
 title: string;
 category: TaskCategory;
 priority: TaskPriority;
 dueDate: string;
 status: TaskStatus;
 notes: string;
 createdAt: string;
}
=======
export type TaskCategory = 'Work' | 'Personal' | 'Academic'

export type CategoryFilter = 'All' | TaskCategory

export type Task = {
  id: number
  title: string
  category: TaskCategory
  dueDate: string
  completed: boolean
}
>>>>>>> 8693c8e (Complete sidebar category navigation)
