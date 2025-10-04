import React from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Login from "./pages/login"
import Register from "./pages/register"
import Home from "./pages/home"
import NotFound from "./pages/not_found"
import ProtectedRoute from "./components/ProtectedRoutes"


function Logout() {
  localStorage.clear()
  return <Navigate to="/login" />
}

// When registering, you need to ensure the local storage is cleared. 
function RegisterAndLogout() {
  localStorage.clear()
  return <Register />
}


function App() {

  return (
    <>
    
    </>
  )
}

export default App
