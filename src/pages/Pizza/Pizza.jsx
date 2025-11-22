import { useEffect, useState } from "react";

function Pizza() {
  const apiPizza = "http://localhost:3001/api/pizzas/p001";
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    getPizzas();
  }, []);

  const getPizzas = async () => {
    const response = await fetch(apiPizza);
    const data = await response.json();
    setPizza(data);
  };

  // Mientras carga la data
  if (!pizza) return <p>Cargando pizza...</p>;

  return (
    <div style={{ width: "400px", margin: "20px auto" }}>
      <h1>{pizza.name}</h1>

      <img 
        src={pizza.img}
        alt={pizza.name}
        style={{ width: "100%", borderRadius: "10px" }}
      />

      <p><strong>Precio:</strong> ${pizza.price}</p>

      <p><strong>Descripción:</strong> {pizza.desc}</p>

      <p><strong>Ingredientes:</strong></p>
      <ul>
        {pizza.ingredients.map((ing, index) => (
          <li key={index}>{ing}</li>
        ))}
      </ul>

      <button style={{
        padding: "10px 20px",
        background: "black",
        color: "white",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer"
      }}>
        Añadir al carrito
      </button>
    </div>
  );
}

export default Pizza;