/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { pizzass } from "./pages/pizzas";

export const MyContext = createContext({});

export const ContextProvider = ({ children }) => {
  const apiPizza = "http://localhost:3001/api/pizzas"; // ahora ruta completa
  const [pizzas, setPizzas] = useState([]);
  const [cart, setCart] = useState(pizzass);

  useEffect(() => {
    getPizzas();
  }, []);

  const getPizzas = async () => {
    const response = await fetch(apiPizza);
    const data = await response.json();
    setPizzas(data);
  };

  const total = cart.reduce((acc, pizza) => acc + pizza.price * pizza.count, 0);

  const globalState = {
    cart,
    setCart,
    total,
    pizzas
  };

  return (
    <MyContext.Provider value={globalState}>{children}</MyContext.Provider>
  );
};
