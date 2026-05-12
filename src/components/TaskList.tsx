import type { StudyTask } from "../types/Task";
import TaskItem from "./TaskItem";
import "./TaskList.css";

type TaskListProps = {
  tasks: StudyTask[];
  onToggleComplete: (id: string) => void;
  onEditTask: (task: StudyTask) => void;
  onDeleteTask: (id: string) => void;
};

export default function TaskList({ tasks, onToggleComplete, onEditTask, onDeleteTask }: TaskListProps) {
  if (tasks.length === 0) {
    return (
      <div className="task-list-empty">
        <h3>No tasks found</h3>
        <p>Add a new task or adjust your filters to see results.</p>
      </div>
    );
  }

  return (
    <div className="task-list-container">
      {tasks.map((task) => (
        <TaskItem 
          key={task.id} 
          task={task} 
          onToggleComplete={onToggleComplete}
          onEditTask={onEditTask}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </div>
  );
}