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

// This app allows us to navigate through the different pages. 
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={    // Here, you cannot access the protected route - the home - if you do not have a token.
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<RegisterAndLogout />} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
