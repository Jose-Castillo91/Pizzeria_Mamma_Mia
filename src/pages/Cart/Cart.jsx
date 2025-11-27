import { MyContext } from "../../Context";
import "./Cart.css";
import { useContext } from "react";

function Cart() {
  const {cart, setCart, total} = useContext(MyContext)

  const handleAdd = (id) => {
    const updated = cart.map((pizza) =>
      pizza.id === id ? { ...pizza, count: pizza.count + 1 } : pizza
    );
    setCart(updated);
  };

  const handleSubtract = (id) => {
    const updated = cart
      .map((pizza) =>
        pizza.id === id ? { ...pizza, count: pizza.count - 1 } : pizza
      )
      .filter((pizza) => pizza.count > 0);
    setCart(updated);
  };


  // Formatear CLP
  const formatCLP = (valor) =>
    valor.toLocaleString("es-CL", { style: "currency", currency: "CLP" });

  return (
    
    <section className="contenedorCart">
      
      
      <h2>Detalles del pedido:</h2>

      {cart.map((pizza) => (
        <div key={pizza.id} className="itemCart">
          <div className="pizzaInfo">
            <img src={pizza.img} alt={pizza.name} />
            <span className="pizzaName">{pizza.name}</span>
          </div>

          <div className="pizzaPrice">{formatCLP(pizza.price)}</div>

          <div className="pizzaControls">
            <button className="btnSub" onClick={() => handleSubtract(pizza.id)}>
              -
            </button>
            <span className="count">{pizza.count}</span>
            <button className="btnAdd" onClick={() => handleAdd(pizza.id)}>
              +
            </button>
          </div>
        </div>
      ))}

      <div className="totalCompra">
        <h3>Total: <span>{formatCLP(total)}</span></h3>
        <button className="btnPagar">Pagar</button>
      </div>
    </section>
  );
}

export default Cart;