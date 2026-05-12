import type { CategoryFilter, Task } from '../types/Task'
import './Sidebar.css'

type SidebarProps = {
  categories: CategoryFilter[]
  selectedCategory: CategoryFilter
  tasks: Task[]
  onCategoryChange: (category: CategoryFilter) => void
}

function Sidebar({
  categories,
  selectedCategory,
  tasks,
  onCategoryChange,
}: SidebarProps) {
  const getTaskCount = (category: CategoryFilter) => {
    if (category === 'All') {
      return tasks.length
    }

    return tasks.filter((task) => task.category === category).length
  }

  return (
    <aside className="sidebar" aria-label="Task category navigation">
      <div className="sidebar__header">
        <p className="sidebar__eyebrow">Task Planner</p>
        <h2>Categories</h2>
      </div>

      <nav className="sidebar__nav">
        {categories.map((category) => {
          const isActive = category === selectedCategory

          return (
            <button
              type="button"
              className={`sidebar__category${isActive ? ' sidebar__category--active' : ''}`}
              aria-pressed={isActive}
              onClick={() => onCategoryChange(category)}
              key={category}
            >
              <span className="sidebar__category-name">{category}</span>
              <span className="sidebar__category-count">
                {getTaskCount(category)}
              </span>
            </button>
          )
        })}
      </nav>
    </aside>
  )
}

export default Sidebar
