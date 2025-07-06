# 📝 TODO App Backend (Node.js + Express + MongoDB)

This is the backend of a simple TODO app built using **Node.js**, **Express**, and **MongoDB (with Mongoose)**.

It provides RESTful API endpoints to:
1. ✅ Create a new todo
2. 📄 Get all todos
3. 🔍 Get a single todo by ID
4. 🗑️ Delete a todo by ID

---

## 🚀 Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose**
- **dotenv** for environment variables
- **nodemon** for auto-reloading during development

---

## 📁 Folder Structure

```bash
project-root/
│
├── config/ # MongoDB connection logic
│ └── database.js
│
├── controllers/ # Request handler functions
│ ├── createTodo.js
│ ├── getTodos.js
│ ├── findTodo.js
│ └── deleteTodo.js
│
├── models/ # Mongoose schema
│ └── Todo.js
│
├── routes/ # API route handlers
│ └── Todos.js
│
├── .env # Environment variables (PORT, DB URL)
├── package.json # NPM scripts and dependencies
├── package-lock.json
└── index.js # Main entry point
```

## ⚙️ Setup Instructions

### 1. Clone the repository
### 2. Install dependencies
  npm install
### 3. Run the project 
  npm run dev
