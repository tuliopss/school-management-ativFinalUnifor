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
// import StudentPage from "./pages/StudentPage";
import FormPage from "./pages/FormPage/AddFormPage";
import Main from "./pages/Main";
import TableTeacherComponent from "./components/TableTeacherComponent";
import TableStudentComponent from "./components/TableStudentComponent";
import StudentPage from "./pages/StudentPage";
import EditFormPage from "./pages/FormPage/EditFormPage";

function App() {
  const { auth, loading } = useAuth();
  if (loading) {
    return <p>Carregando...</p>;
  }
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className='container'>
          <Routes>
            <Route
              path='/'
              element={auth ? <Main /> : <Navigate to='/login' />}
            />
            <Route
              path='/teachers'
              element={auth ? <Home /> : <Navigate to='/login' />}
            />
            <Route
              path='/students'
              // element={<StudentPage />}
              element={auth ? <StudentPage /> : <Navigate to='/login' />}
            />
            <Route
              path='/form'
              // element={<FormPage />}
              element={auth ? <FormPage /> : <Navigate to='/login' />}
            />
            <Route
              path='/edit/:id'
              // element={<FormPage />}
              element={auth ? <EditFormPage /> : <Navigate to='/login' />}
            />
            <Route
              path='/register'
              element={!auth ? <Register /> : <Navigate to='/' />}
            />
            <Route
              path='/login'
              element={!auth ? <Login /> : <Navigate to='/' />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
