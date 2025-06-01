Task Manager Web App

Created by:
Tanner Day

---

Project Overview

This is a React-based task management web app built as part of a Software Engineering Bootcamp. It allows users to:

- Add tasks
- Mark tasks as complete/incomplete
- Filter tasks (All / Completed / Incomplete)
- Delete tasks
- Navigate between a task view and a contact form

The app demonstrates CRUD functionality (Create, Read, Update, Delete) using React state.



How to Use

1. Start on the `/todos` page**
   - Add a task using the input field
   - Click a task to mark it as complete
   - Use the filter buttons to show All, Completed, or Incomplete tasks
   - Click “Delete” to remove a task

2. Visit the `/contact` page**
   - Fill out the First Name, Last Name, Email, and Comments fields
   - Fields are controlled inputs with React state

---

Technologies Used

- React
- React Router DOM
- React Bootstrap
- Custom CSS (10+ rules applied in `App.css`)

---

Features

- Fully functional React Router (`/todos`, `/contact`)
- Controlled components for form handling
- Task state managed in React
- 10+ custom CSS rules for styling
- Responsive layout using Bootstrap
- Side-by-side layout (form + list) on `/todos` page
- Clean GitHub commit history

---

Ideas for Future Improvement

1. Store todos in `localStorage` so tasks persist across refreshes
2. Add task editing functionality (double-click to edit)
3. Add backend integration using Firebase or Express for storing tasks

---

Project Structure
-components/
    -Navbar.js
    -TodoForm.js
    -TodoItem.js
    -ContactForm.js
-pages/
    -Todos.js
    -Contact.js

-Apps.js
-index.js
-App.css