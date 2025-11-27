/* eslint-disable react/prop-types */
import { useNavigate } from "react-router";
import "./CardPizza.css";
import { useContext } from "react";
import { MyContext } from "../../Context";

function CardPizza({ id, name, img, ingredients, price }) {
  const navigate = useNavigate();
  const { cart, setCart } = useContext(MyContext);

  const handleAdd = (id) => {
    const updated = cart.map((pizza) =>
      pizza.id === id ? { ...pizza, count: pizza.count + 1 } : pizza
    );
    setCart(updated);
  };

  return (
    <div>

      <div className="container" style={{ width: "28rem", borderRadius: "3%" }}>
        <div className="card">
          <div className="card-image">
            <img src={img} />
          </div>
          <div className="card-text">
            <h2 className="card-title">{name}</h2>
            <p className="card-body">
              <span style={{ textDecoration: "underline" }}>Ingredientes:</span>
              {ingredients.map((ingredients, index) => (
                <li key={index}>{ingredients}</li>
              ))}
            </p>
          </div>

          <div className="card-price">${price.toLocaleString("es-CL")}</div>

          <div className="card-buttons">
            <button onClick={() => navigate("/pizza/P001")} className="btn-ver">
              Ver Más
            </button>
          
            <button className="btn-add" onClick={() => handleAdd(id)}>
              Añadir
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardPizza;
