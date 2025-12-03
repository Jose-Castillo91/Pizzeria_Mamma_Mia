import "./App.css";

import Footer from "./components/Footer/Footer";
import Login from "./pages/Login/Login.jsx";
import Home from "./pages/Home/Home.jsx";
import NavBar from "./components/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Register from "./pages/Register/Register.jsx";
import { Route, Routes } from "react-router";
import NotFound from "./components/NotFound/NotFound.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import Pizza from "./pages/Pizza/Pizza.jsx";
import Profile from "./components/Profile/Profile.jsx";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pizza/:id" element={<Pizza />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
