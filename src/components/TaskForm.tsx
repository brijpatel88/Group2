// src/components/TaskForm.tsx
import React, { useState } from 'react';
import type { StudyTask, TaskCategory, TaskPriority } from '../types/Task.ts';
import './TaskForm.css';

interface TaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (task: StudyTask) => void;
  taskToEdit?: StudyTask | null; 
}

const TaskModal: React.FC<TaskModalProps> = ({ isOpen, onClose, onSave, taskToEdit }) => {
  // Use taskToEdit directly for the initial state. 
  // No useEffect needed!
  const [formData, setFormData] = useState<Partial<StudyTask>>(
    taskToEdit || {
      title: '',
      category: 'Personal',
      priority: 'Low',
      dueDate: '',
      notes: '',
      status: 'Pending'
    }
  );

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const finalTask: StudyTask = {
      ...(formData as StudyTask),
      id: taskToEdit?.id || crypto.randomUUID(), // Using your app's UUID style
      createdAt: taskToEdit?.createdAt || new Date().toISOString(),
    };
    onSave(finalTask);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <header>
          <div className="icon-title">
             <div className="check-circle">✓</div> 
             <h2>{taskToEdit ? 'Edit task' : 'Create a task'}</h2>
          </div>
          <p className="subtitle">Please fill in the details below</p>
        </header>

        <form onSubmit={handleSubmit}>
          <input 
            className="task-input"
            placeholder="Task title"
            value={formData.title || ''}
            onChange={(e) => setFormData({...formData, title: e.target.value})}
            required
          />

          <div className="form-row">
            <select 
              value={formData.category} 
              onChange={(e) => setFormData({...formData, category: e.target.value as TaskCategory})}
            >
              <option value="Personal">Personal</option>
              <option value="Study">Study</option>
              <option value="Assignments">Assignments</option>
            </select>

            <select 
              value={formData.priority} 
              onChange={(e) => setFormData({...formData, priority: e.target.value as TaskPriority})}
            >
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>

          <input 
            type="date"
            className="task-input"
            value={formData.dueDate || ''}
            onChange={(e) => setFormData({...formData, dueDate: e.target.value})}
          />

          <textarea 
            placeholder="Notes"
            value={formData.notes || ''}
            onChange={(e) => setFormData({...formData, notes: e.target.value})}
          />

          <div className="modal-actions">
            <button type="button" className="btn-cancel" onClick={onClose}>Cancel</button>
            <button type="submit" className="btn-save">
              {taskToEdit ? 'Update task' : 'Add a task'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskModal;