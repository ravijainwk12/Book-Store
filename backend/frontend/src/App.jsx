
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Books from "./components/Books";
import Login from "./components/LogIn";
import Dashboard from "./components/Dashboard";
import AddStudent from "./components/AddStudent";
import { useEffect, useState } from "react";
import Logout from "./components/Logout";
import axios from "axios";
import AddBook from "./components/AddBook";
import EditBook from "./components/EditBook";
import DeleteBook from "./components/DeleteBook";

function App() {
  const [role, setRole] = useState("");

  axios.defaults.withCredentials = true;

  useEffect(() => {
    const fetchRole = async () => {
      try {
        const response = await axios.get("http://localhost:8080/auth/verify"); // Or use process.env.REACT_APP_API_URL

        if (response.data.login) {
          setRole(response.data.role);
        } else {
          setRole("");
        }
      } catch (error) {
        console.error("Error fetching role:", error);
      }
    };

    fetchRole(); // Call the function to fetch role
  }, []);

  return (
    <BrowserRouter>
      <Navbar role={role} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books role={role} />} />
        <Route path="/login" element={<Login setRole={setRole} />} />
        <Route path="/dashboard" element={<Dashboard isAuthorized={role === "admin"} />} /> {/* Conditional rendering for authorization */}
        <Route path="/addstudent" element={<AddStudent isAuthorized={role === "admin"} />} /> {/* Conditional rendering for authorization */}
        <Route path="/logout" element={<Logout setRole={setRole} />} />
        <Route path="/addbook" element={<AddBook isAuthorized={role === "admin"} />} /> {/* Conditional rendering for authorization */}
        <Route path="/book/:id" element={<EditBook />} />
        <Route path="/delete/:id" element={<DeleteBook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
