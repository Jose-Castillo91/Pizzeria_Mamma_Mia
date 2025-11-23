import { useEffect, useState } from "react";
import "./Pizza.css";

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
    <div>
      <div className="container" style={{ width: "28rem", borderRadius: "3%" }}>
        <div className="card">
          <div className="card-image">
            <img src={pizza.img} />
          </div>
          <div className="card-text01">
            <h2 className="card-title">{pizza.name}</h2>
            <p className="card-body">{pizza.desc}</p>
          </div>
          <p className="card-body01">
            <span style={{ textDecoration: "underline" }}>Ingredientes:</span>
            {pizza.ingredients.map((ingredients, index) => (
              <li key={index}>{ingredients}</li>
            ))}
          </p>

          <div className="card-price">${pizza.price.toLocaleString('es-CL')}</div>

          <div className="card-buttons">
            <button className="btn-ver">Añadir</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pizza;
