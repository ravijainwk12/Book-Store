# Book Store

This repository contains a Book Store app built using MERN  (MongoDB, Express.js, React.js, Node.js) stack tailored for students.

The project allows students to log in and view the available books in the store. Student registrations can only be done by the admin.

The Students after the registration can Download the PDf of the available books.

Please follow the instruction to set it up.


**Features**

1. User Authentication: Students can log in securely to access the bookstore.

2. Admin Panel: Admin can register students and manage the bookstore.

3. Book Availability: Students can see which books are available in the store and after the registration students can download the Books that are available.

4. Responsive Design: The application is designed to be responsive and work well on different devices.

**Technologies Used**

* Frontend: 
    
  React.js - Frontend library for building user interfaces.

   Vite - Build tool for modern web development with React.

* Backend:

    Node.js - JavaScript runtime environment for running server-side code.

   Express.js - Web framework for building APIs and handling requests.


* Database:
    
     MongoDB - NoSQL database for storing user data and book information.

    
* Authentication:
   
    JWT (JSON Web Tokens) -  For secure authentication and authorization.

* Styling: 
    
    CSS Framework (optional) - You may choose to use a CSS framework like Bootstrap or Tailwind CSS for styling.

## Instructions

* Clone the repo and run ``npm install ``
* From the Frontend Folder run `` npm run dev `` 

* From th Backend Folder run ``npm start `` 

* Set up environment variables -
  
  Create a .env file in the Backend directory and add the following variables:

  ```js 
 
  Admin_Key ="admin-key "
  Student_Key = "student-key"
  ```
 

 * **React + Vite**

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


---
 **Contribution**

  Contributions are welcome! Feel free to open issues or submit pull requests to contribute to this project.
