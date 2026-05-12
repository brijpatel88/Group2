<<<<<<< HEAD
// src/App.tsx
// Main app file. Manages global task state and connects all components.

import { useEffect, useMemo, useState } from "react";
import Sidebar from "./components/Sidebar";
import SummaryCards from "./components/SummaryCards";
import TaskForm from "./components/TaskForm";
import TaskFilters from "./components/TaskFilters";
import TaskList from "./components/TaskList";
import type { StudyTask, TaskCategory, TaskPriority, TaskStatus } from "./types/Task";
import { loadTasks, saveTasks } from "./utils/localStorage";
import { isTaskOverdue } from "./utils/taskHelpers";
import "./App.css";

type CategoryFilter = "All Tasks" | TaskCategory | "Completed";
type PriorityFilter = "All Priorities" | TaskPriority;
type StatusFilter = "All Status" | TaskStatus;
type SortOption = "Newest" | "Due Date" | "Priority";

export default function App() {
  // Main task state loaded from localStorage.
  const [tasks, setTasks] = useState<StudyTask[]>(() => loadTasks());

  // Modal/form state.
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<StudyTask | null>(null);

  // Filter state.
  const [selectedCategory, setSelectedCategory] =
    useState<CategoryFilter>("All Tasks");
  const [searchTerm, setSearchTerm] = useState("");
  const [priorityFilter, setPriorityFilter] =
    useState<PriorityFilter>("All Priorities");
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("All Status");
  const [sortOption, setSortOption] = useState<SortOption>("Newest");

  // Save tasks whenever task list changes.
  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  // Adds a new task.
  function handleAddTask(taskData: Omit<StudyTask, "id" | "status" | "createdAt">) {
    const newTask: StudyTask = {
      id: crypto.randomUUID(),
      ...taskData,
      status: "Pending",
      createdAt: new Date().toISOString(),
    };

    setTasks((currentTasks) => [newTask, ...currentTasks]);
    setIsFormOpen(false);
  }

  // Updates an existing task.
  function handleUpdateTask(taskData: Omit<StudyTask, "id" | "status" | "createdAt">) {
    if (!editingTask) return;

    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === editingTask.id
          ? {
              ...task,
              ...taskData,
            }
          : task
      )
    );

    setEditingTask(null);
    setIsFormOpen(false);
  }

  // Opens form in edit mode.
  function handleEditTask(task: StudyTask) {
    setEditingTask(task);
    setIsFormOpen(true);
  }

  // Deletes a task.
  function handleDeleteTask(taskId: string) {
    setTasks((currentTasks) =>
      currentTasks.filter((task) => task.id !== taskId)
    );
  }

  // Toggles task status between Pending and Completed.
  function handleToggleComplete(taskId: string) {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              status: task.status === "Completed" ? "Pending" : "Completed",
            }
          : task
      )
    );
  }

  // Opens form in add mode.
  function handleOpenAddForm() {
    setEditingTask(null);
    setIsFormOpen(true);
  }

  // Closes modal form.
  function handleCloseForm() {
    setEditingTask(null);
    setIsFormOpen(false);
  }

  // Filters and sorts tasks before showing them.
  const filteredTasks = useMemo(() => {
    let result = [...tasks];

    if (selectedCategory === "Completed") {
      result = result.filter((task) => task.status === "Completed");
    } else if (selectedCategory !== "All Tasks") {
      result = result.filter((task) => task.category === selectedCategory);
    }

    if (searchTerm.trim()) {
      result = result.filter(
        (task) =>
          task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          task.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (priorityFilter !== "All Priorities") {
      result = result.filter((task) => task.priority === priorityFilter);
    }

    if (statusFilter !== "All Status") {
      result = result.filter((task) => task.status === statusFilter);
    }

    if (sortOption === "Due Date") {
      result.sort(
        (a, b) =>
          new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime()
      );
    }

    if (sortOption === "Priority") {
      const priorityOrder = {
        High: 1,
        Medium: 2,
        Low: 3,
      };

      result.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
    }

    if (sortOption === "Newest") {
      result.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
    }

    return result;
  }, [tasks, selectedCategory, searchTerm, priorityFilter, statusFilter, sortOption]);

  const completedCount = tasks. filter((task) => task.status === "Completed").length;
  const pendingCount = tasks.filter((task) => task.status === "Pending").length;
  const overdueCount = tasks.filter((task) => isTaskOverdue(task)).length;
=======
import { useMemo, useState } from 'react'
import Sidebar from './components/Sidebar'
import type { CategoryFilter, Task } from './types/Task'
import './App.css'

const categories: CategoryFilter[] = ['All', 'Work', 'Personal', 'Academic']

const tasks: Task[] = [
  {
    id: 1,
    title: 'Draft project proposal',
    category: 'Work',
    dueDate: 'Today',
    completed: false,
  },
  {
    id: 2,
    title: 'Review lecture notes',
    category: 'Academic',
    dueDate: 'Tomorrow',
    completed: false,
  },
  {
    id: 3,
    title: 'Book dentist appointment',
    category: 'Personal',
    dueDate: 'Friday',
    completed: true,
  },
  {
    id: 4,
    title: 'Prepare team update',
    category: 'Work',
    dueDate: 'Monday',
    completed: false,
  },
]

function App() {
  const [selectedCategory, setSelectedCategory] =
    useState<CategoryFilter>('All')

  const visibleTasks = useMemo(() => {
    if (selectedCategory === 'All') {
      return tasks
    }

    return tasks.filter((task) => task.category === selectedCategory)
  }, [selectedCategory])
>>>>>>> 8693c8e (Complete sidebar category navigation)

  return (
    <div className="app-shell">
      <Sidebar
<<<<<<< HEAD
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      <main className="main-content">
        <section className="hero-section">
          <div>
            <p className="hero-eyebrow">Student productivity dashboard</p>
            <h1>Plan smarter. Study better.</h1>
            <p>
              Organize assignments, study tasks, priorities, and deadlines in one simple planner.
            </p>
          </div>

          <button className="primary-action" onClick={handleOpenAddForm}>
            + Add Task
          </button>
        </section>

        <SummaryCards
          totalTasks={tasks.length}
          completedTasks={completedCount}
          pendingTasks={pendingCount}
          overdueTasks={overdueCount}
        />

        <TaskFilters
          searchTerm={searchTerm}
          priorityFilter={priorityFilter}
          statusFilter={statusFilter}
          sortOption={sortOption}
          onSearchChange={setSearchTerm}
          onPriorityChange={setPriorityFilter}
          onStatusChange={setStatusFilter}
          onSortChange={setSortOption}
        />

        <TaskList
          tasks={filteredTasks}
          onToggleComplete={handleToggleComplete}
          onEditTask={handleEditTask}
          onDeleteTask={handleDeleteTask}          
        />
      </main>

      {isFormOpen && (
        <TaskForm
          editingTask={editingTask}
          onAddTask={handleAddTask}
          onUpdateTask={handleUpdateTask}
          onClose={handleCloseForm}
        />
      )}
    </div>
  );
}
=======
        categories={categories}
        selectedCategory={selectedCategory}
        tasks={tasks}
        onCategoryChange={setSelectedCategory}
      />

      <main className="task-view">
        <div className="task-view__header">
          <p className="task-view__eyebrow">Current View</p>
          <h1>{selectedCategory} Tasks</h1>
          <p>
            Showing {visibleTasks.length}{' '}
            {visibleTasks.length === 1 ? 'task' : 'tasks'}
          </p>
        </div>

        <ul className="task-list" aria-label={`${selectedCategory} tasks`}>
          {visibleTasks.map((task) => (
            <li className="task-card" key={task.id}>
              <div>
                <h2>{task.title}</h2>
                <p>{task.dueDate}</p>
              </div>
              <span>{task.category}</span>
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}

export default App
>>>>>>> 8693c8e (Complete sidebar category navigation)
