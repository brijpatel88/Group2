import './Sidebar.css'

type SidebarCategory =
  | 'All Tasks'
  | 'Study'
  | 'Assignments'
  | 'Personal'
  | 'Completed'

type SidebarProps = {
  selectedCategory: SidebarCategory
  onSelectCategory: (category: SidebarCategory) => void
}

const categories: SidebarCategory[] = [
  'All Tasks',
  'Study',
  'Assignments',
  'Personal',
  'Completed',
]

function Sidebar({ selectedCategory, onSelectCategory }: SidebarProps) {
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
              onClick={() => onSelectCategory(category)}
              key={category}
            >
              <span className="sidebar__category-name">{category}</span>
            </button>
          )
        })}
      </nav>
    </aside>
  )
}

export default Sidebar
