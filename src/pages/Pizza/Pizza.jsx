import { useContext } from "react";
import { useParams } from "react-router";
import { MyContext } from "../../Context";
import "./Pizza.css";


function Pizza() {
  const { id } = useParams();
  const { pizzas, cart, setCart } = useContext(MyContext);

  const pizza = pizzas.find(
    (p) => p.id.toLowerCase() === String(id).toLowerCase()
  );

  if (!pizza) return <p>Cargando pizza...</p>;

  const handleAdd = () => {
    const existing = cart.find((p) => p.id === pizza.id);

    if (existing) {
      const updated = cart.map((p) =>
        p.id === pizza.id ? { ...p, count: p.count + 1 } : p
      );
      setCart(updated);
    } else {
      const newPizza = {
        ...pizza,
        count: 1,
      };
      setCart([...cart, newPizza]);
    }
  };

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
            <button className="btn-ver" onClick={handleAdd}>Añadir</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pizza;
