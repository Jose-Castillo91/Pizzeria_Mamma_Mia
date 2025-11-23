/* eslint-disable react/prop-types */
import { useNavigate } from "react-router";
import "./CardPizza.css"
function CardPizza({name, img, ingredients, price}) {
    const navitate = useNavigate();
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
             <span style={{textDecoration: "underline"}}>Ingredientes:</span>
            {ingredients.map((ingredients, index) => (
              <li key={index}>{ingredients}</li>
            ))}
            </p>
          </div>


          <div className="card-price">${price}</div>

          <div className="card-buttons">
          <button onClick={() => navitate("/pizza/001")} className="btn-ver">Ver Más</button>
          <button className="btn-add">Añadir</button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default CardPizza;
