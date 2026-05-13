# Task & Study Planner

A modern **Task & Study Planner Web Application** built using **React + TypeScript + Vite**. This application helps students and users organize study tasks, assignments, and personal activities in one place with filtering, task tracking, and productivity features.

---

## 📌 Project Overview

The **Task & Study Planner** is designed to improve productivity by allowing users to:

- Create and manage tasks
- Organize tasks by category
- Set priorities and due dates
- Track completed and pending work
- Filter and search tasks quickly
- Monitor progress using dashboard statistics

The application uses **local storage** to save tasks so data remains available after refreshing the browser.

---

## ✨ Features

### ✅ Task Management
- Add new tasks
- Edit existing tasks
- Delete tasks
- Mark tasks as completed or pending

### ✅ Categories
Tasks can be organized into categories such as:

- Study
- Assignments
- Personal
- Completed Tasks

### ✅ Search & Filtering
Users can:

- Search tasks by title or subject
- Filter by priority:
  - High
  - Medium
  - Low
- Filter by status:
  - Pending
  - Completed
- Sort tasks by:
  - Due Date
  - Priority
  - Newest

### ✅ Dashboard Summary
The dashboard includes:

- Total Tasks
- Completed Tasks
- Pending Tasks
- Overdue Tasks
- Progress Indicator

### ✅ Modern User Interface
- Sidebar navigation
- Dashboard layout
- Popup modal for task creation/editing
- Responsive design

---

## 🛠️ Technologies Used

- **React**
- **TypeScript**
- **Vite**
- **CSS3**
- **Local Storage API**

---

## 📂 Project Structure

```txt
src/
│── components/
│   ├── Sidebar.tsx
│   ├── SummaryCards.tsx
│   ├── TaskFilters.tsx
│   ├── TaskForm.tsx
│   ├── TaskItem.tsx
│   └── TaskList.tsx
│
│── types/
│   └── Task.ts
│
│── utils/
│   ├── localStorage.ts
│   └── taskHelpers.ts
│
│── App.tsx
│── App.css
│── main.tsx
```

---

## 🚀 Installation & Setup

1. Clone the repository

```bash
git clone https://github.com/brijpatel88/Group2.git
```

2. Navigate to the project folder

```bash
cd task-study-planner
```

3. Install dependencies

```bash
npm install
```

4. Run the development server

```bash
npm run dev
```

5. Open in browser

```txt
http://localhost:5173
```

---

## 👥 Team Members

This project was developed collaboratively by:

- Cemar Watin  
- Chibuzor Awanye  
- Richard Begin  
- Isidore Mbargamanga  
- Brijesh Patel

---

## 📄 Copyright

© 2026 Task & Study Planner Project. All rights reserved.

This project was created for academic and educational purposes as part of a collaborative software development assignment.

Unauthorized commercial distribution, reproduction, or modification of this project without permission from the authors is prohibited.

---

## 📜 License

This project is intended for **educational use only**.