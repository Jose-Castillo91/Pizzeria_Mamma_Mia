import { useEffect, useState } from "react";
import CardPizza from "../../components/CardPizza/CardPizza";
import Header from "../../components/Header/Header";
import "./Home.css";

function Home() {
  const apiPizza = "http://localhost:3001/api/pizzas"; // ahora ruta completa
  const [pizzas, setPizzas] = useState([]); // ahora es un array

  useEffect(() => {
    getPizzas();
  }, []);

  const getPizzas = async () => {
    const response = await fetch(apiPizza);
    const data = await response.json();
    setPizzas(data);
  };

  return (
    <>
      <Header />
      <section className="contenedorPizzas">
        {pizzas.length > 0 &&
          pizzas.map((pizza) => (
            <CardPizza
              key={pizza.id}
              name={pizza.name}
              price={pizza.price}
              ingredients={pizza.ingredients}
              img={pizza.img}
            />
          ))}
      </section>
    </>
  );
}

export default Home;
