import { pizzaCart } from "./pizzas";
import "./Cart.css";
import { useState } from "react";

function Cart() {
  const [cart, setCart] = useState(pizzaCart);

  // Funciones para sumar y restar

  const handleAdd = (id) => {
    const updateCart = cart.map((pizza) =>
      pizza.id === id ? { ...pizza, count: pizza.count + 1 } : pizza
    );
    setCart(updateCart);
  };

  const handleSubtract = (id) => {
    const updatedCart = cart
      .map((pizza) =>
        pizza.id === id ? { ...pizza, count: pizza.count - 1 } : pizza
      )
      .filter((pizza) => pizza.count > 0);
    setCart(updatedCart);
  };

  //Calcular el total
  const total = cart.reduce((acc, pizza) => acc + pizza.price * pizza.count, 0);

  return (
    <>
      <section className="contenedorCart">
        <h6>Detalles del pedido:</h6>
        {cart.length === 0 ? (
          <p> Tu carrito esta vacío </p>
        ) : (
          cart.map((pizza) => (
            <div key={pizza.id} className="itemCart">
              <div className="infoPizza">
                <img src={pizza.img} alt={pizza.name} />
                <span>{pizza.name}</span>
              </div>

              <div className="cantidadPizza">
                <button onClick={() => handleSubtract(pizza.id)}>-</button>
                <span>{pizza.count}</span>
                <button onClick={() => handleAdd(pizza.id)}>+</button>
              </div>

              <div className="precioPizza">
                <span>${(pizza.price * pizza.count).toLocaleString("es-Cl")}</span>
              </div>
            </div>
          ))
        )}
        <hr />
        <div className="totalCompra">
          <h3>Total: ${total.toLocaleString("es-Cl")}</h3>
          <button className="btnPagar">Pagar</button>
        </div>
      </section>
    </>
  );
}

export default Cart;
