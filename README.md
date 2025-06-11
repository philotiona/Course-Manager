# Courses App (Frontend)

A modern React-based web application for managing educational courses and authors.  
This project is designed as a showcase for my frontend skills and is intended for use in my resume/portfolio.

---

## ✨ Features

- **Authentication:** Login and registration with role-based access (Admin/User)
- **Course Management:**  
  - View all courses  
  - Add, update, and delete courses (Admin only)
  - View detailed course info
- **Author Management:**  
  - Add new authors (Admin only)
  - Assign authors to courses
- **Protected Routes:** Only admins can access course creation and editing pages
- **Responsive UI:** Clean, user-friendly interface
- **API Integration:** All data is fetched and updated via REST API (see [Backend Requirements](#backend-requirements))
- **State Management:** Uses Redux for global state
- **Form Validation:** Robust client-side validation for all forms

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd courses-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```
   The app will run at [http://localhost:3000](http://localhost:3000).

---

## 🖥️ Usage

- **Login:**  
  Use an existing user or register a new one.  
 **Admin Capabilities:**  
  - Add, edit, and delete courses  
  - Add authors  
  - Assign authors to courses

- **User Capabilities:**  
  - View courses and course details

---

## 🛠️ Tech Stack

- **React** (with hooks)
- **Redux** (for state management)
- **React Router** (for navigation)
- **CSS Modules** (for styling)
- **REST API** (for all data operations)

---

## 📦 Folder Structure

```
src/
  components/      # React components (CourseCard, CourseForm, etc.)
  common/          # Shared UI elements (Button, Input, etc.)
  store/           # Redux store, actions, reducers, thunks
  helpers/         # Utility functions
  assets/          # Images, icons, etc.
  constants.js     # (No mocked data used in production)
  App.jsx
  index.js
  ...
```

---

## 🔗 Backend Requirements

This frontend expects a compatible backend API. 

**Required API endpoints:**
- `/login` (POST)
- `/register` (POST)
- `/users/me` (GET)
- `/courses/all` (GET)
- `/courses/add` (POST)
- `/courses/:id` (PUT, DELETE, GET)
- `/authors/all` (GET)
- `/authors/add` (POST)

