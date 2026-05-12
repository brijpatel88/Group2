/* src/components/SummaryCards.tsx */
import './SummaryCards.css';

// Interface matching the props passed by the leader in App.tsx
interface SummaryCardsProps {
  totalTasks: number;
  completedTasks: number;
  pendingTasks: number;
  overdueTasks: number;
}

const SummaryCards = ({ totalTasks, completedTasks, pendingTasks, overdueTasks }: SummaryCardsProps) => {
  // Calculate progress percentage
  const percentage = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  // Format date for the dashboard
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  });

  return (
    <div className="summary-container">
      {/* Dashboard Header with Progress Bar */}
      <div className="summary-header">
        <div className="header-info">
          <p className="hero-eyebrow">Dashboard Overview</p>
          <h2 className="current-date">{currentDate}</h2>
        </div>
        
        <div className="overall-progress">
          <div className="progress-text">
            <span>{percentage}% Completed</span>
          </div>
          <div className="progress-bar-bg">
            <div 
              className="progress-bar-fill" 
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Statistics Cards Grid */}
      <div className="stats-grid">
        <div className="stat-card total">
          <span className="card-label">Total Tasks</span>
          <h2 className="card-value">{totalTasks}</h2>
        </div>

        <div className="stat-card completed">
          <span className="card-label">Completed</span>
          <h2 className="card-value">{completedTasks}</h2>
        </div>

        <div className="stat-card pending">
          <span className="card-label">Pending</span>
          <h2 className="card-value">{pendingTasks}</h2>
        </div>

        <div className="stat-card overdue">
          <span className="card-label">Overdue</span>
          <h2 className="card-value">{overdueTasks}</h2>
        </div>
      </div>
    </div>
  );
};

export default SummaryCards;