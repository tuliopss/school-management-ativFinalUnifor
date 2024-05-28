import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./pages/Home";
import Register from "./pages/Auth/Register";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Navbar from "./components/Navbar";
import { useAuth } from "./hooks/use-auth";
import "bootstrap/dist/css/bootstrap.min.css";
import StudentPage from "./pages/StudentPage";

function App() {
  const { auth, loading } = useAuth();
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className='container'>
          <Routes>
            <Route
              path='/home'
              element={auth ? <Home /> : <Navigate to='/login' />}
            />
            <Route
              path='/student'
              element={<StudentPage />}
              // element={auth ? <StudentPage /> : <Navigate to='/login' />}
            />
            <Route
              path='/register'
              element={!auth ? <Register /> : <Navigate to='/home' />}
            />
            <Route
              path='/login'
              element={!auth ? <Login /> : <Navigate to='/home' />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
