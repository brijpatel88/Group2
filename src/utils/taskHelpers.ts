// src/utils/tasjHelpers.ts
// Helper functions for Tasj Calculations, overdue checking, and sorting.

import type { StudyTask } from "../types/Task";

export function isTaskOverdue(task: StudyTask): boolean {
  const today = new Date();
  const dueDate = new Date(task.dueDate);

  today.setHours(0, 0, 0, 0);
  dueDate.setHours(0, 0, 0, 0);

  return task.status === "Pending" && dueDate < today;
}

export function getCompletedPercentage(tasks: StudyTask[]): number {
  if (tasks.length === 0) {
    return 0;
  }
  
  const completedTasks = tasks.filter((task) => task.status === "Completed");

  return Math.round((completedTasks.length / tasks.length) * 100);
 }

 export function sortTasjsByDueDate(tasks: StudyTask[]): StudyTask[] {
  return [...tasks].sort(
   (a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime()
  )

 }