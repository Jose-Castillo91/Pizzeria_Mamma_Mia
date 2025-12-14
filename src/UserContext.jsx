/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [email, setEmail] = useState(localStorage.getItem("email") || null);

  const login = async (email, password) => {
    try {
      const response = await fetch("http://localhost:3001/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error en el login");
      }

      const data = await response.json();
      const jwtToken = data.token;
      const userEmail = data.email;

      setToken(jwtToken);
      setEmail(userEmail);
      localStorage.setItem("token", jwtToken);
      localStorage.setItem("email", userEmail);

      return { success: true };
    } catch (error) {
      console.error("Error en login:", error);
      return { success: false, error: error.message };
    }
  };

  const register = async (email, password) => {
    try {
      const response = await fetch("http://localhost:3001/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error en el registro");
      }

      const data = await response.json();
      const jwtToken = data.token;
      const userEmail = data.email;

      setToken(jwtToken);
      setEmail(userEmail);
      localStorage.setItem("token", jwtToken);
      localStorage.setItem("email", userEmail);

      return { success: true };
    } catch (error) {
      console.error("Error en register:", error);
      return { success: false, error: error.message };
    }
  };

  const logout = () => {
    setToken(null);
    setEmail(null);
    localStorage.removeItem("token");
    localStorage.removeItem("email");
  };

  const getProfile = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/auth/me", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Error al obtener el perfil");
      }

      const data = await response.json();
      return { success: true, data };
    } catch (error) {
      console.error("Error en getProfile:", error);
      return { success: false, error: error.message };
    }
  };

  const globalUserState = {
    token,
    email,
    login,
    register,
    logout,
    getProfile,
    setToken,
  };

  return (
    <UserContext.Provider value={globalUserState}>
      {children}
    </UserContext.Provider>
  );
};
