import { MyContext } from "../../Context";
import "./Cart.css";
import { useContext, useState } from "react";
import { UserContext } from "../../UserContext.jsx";

function Cart() {
  const { cart, setCart, total } = useContext(MyContext);
  const { token } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

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

  const handleCheckout = async () => {
    if (!token) {
      alert("Debes iniciar sesión para realizar la compra");
      return;
    }

    if (cart.filter((pizza) => pizza.count > 0).length === 0) {
      alert("El carrito está vacío");
      return;
    }

    setLoading(true);
    setSuccessMessage("");

    try {
      const response = await fetch("http://localhost:5000/api/checkouts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          cart: cart.filter((pizza) => pizza.count > 0),
        }),
      });

      if (!response.ok) {
        throw new Error("Error al procesar la compra");
      }

      setSuccessMessage("¡Compra realizada con éxito!");
      setCart([]);
    } catch (error) {
      console.error("Error en checkout:", error);
      alert("Error al procesar la compra. Por favor, intenta nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  const formatCLP = (valor) =>
    valor.toLocaleString("es-CL", { style: "currency", currency: "CLP" });

  return (
    <section className="contenedorCart">
      <h2>Detalles del pedido:</h2>

      {successMessage && (
        <div className="success-message">{successMessage}</div>
      )}

      {cart
        .filter((pizza) => pizza.count > 0)
        .map((pizza) => (
          <div key={pizza.id} className="itemCart">
            <div className="pizzaInfo">
              <img src={pizza.img} alt={pizza.name} />
              <span className="pizzaName">{pizza.name}</span>
            </div>

            <div className="pizzaPrice">{formatCLP(pizza.price)}</div>

            <div className="pizzaControls">
              <button
                className="btnSub"
                onClick={() => handleSubtract(pizza.id)}
              >
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
        <h3>
          Total: <span>{formatCLP(total)}</span>
        </h3>
        <button
          className="btnPagar"
          disabled={!token || loading}
          onClick={handleCheckout}
        >
          {loading ? "Procesando..." : "Pagar"}
        </button>
      </div>
    </section>
  );
}

export default Cart;
