import { useEffect, useState } from "react";
import CardPizza from "./CardPizza";
import Header from "./Header";
import "./Home.css";

function Home() {
  const apiPizza = "http://localhost:3001/api/pizzas/p001";
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    getPizzas();
  }, []);

  const getPizzas = async () => {
    const url = apiPizza;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setPizza(data);
  };

  return (
    <>
      <Header />
      <section className="contenedorPizzas">
        {pizza && (
          <CardPizza
            key={pizza.id}
            name={pizza.name}
            price={pizza.price}
            ingredients={pizza.ingredients}
            img={pizza.img}
          ></CardPizza>
        )}
      </section>
    </>
  );
}

export default Home;
