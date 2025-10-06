
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/login.jsx";
import Register from "./pages/register.jsx";
import Home from "./pages/home.jsx";
import NotFound from "./pages/not_found.jsx";
import ProtectedRoute from "./components/ProtectedRoutes.jsx";

function Logout() {
  localStorage.clear();
  return <Navigate to="/login" replace />;
}

// When registering, you need to ensure the local storage is cleared.
function RegisterAndLogout() {
  localStorage.clear();
  return <Register />;
}

// This app allows us to navigate through the different pages. 
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Make the root show Login */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<RegisterAndLogout />} />
        {/* Protect Home at /home instead of / */}
        <Route
          path="/home"
          element={              // Here, you cannot access the protected route - the home - if you do not have a token.
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
