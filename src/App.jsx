/* eslint-disable react/prop-types */
import "./App.css";

import Footer from "./components/Footer/Footer";
import Login from "./pages/Login/Login.jsx";
import Home from "./pages/Home/Home.jsx";
import NavBar from "./components/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Register from "./pages/Register/Register.jsx";
import { Navigate, Route, Routes } from "react-router";
import NotFound from "./components/NotFound/NotFound.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import Pizza from "./pages/Pizza/Pizza.jsx";
import Profile from "./components/Profile/Profile.jsx";
import { useContext } from "react";
import { UserContext } from "./UserContext.jsx";

function ProtectedRoute({ children }) {
  const { token } = useContext(UserContext);
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

function PublicRoute({ children }) {
  const { token } = useContext(UserContext);
  if (token) {
    return <Navigate to="/" replace />;
  }
  return children;
}

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pizza/:id" element={<Pizza />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
