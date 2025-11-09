
import CardPizza from "./CardPizza";
import Header from "./Header";
import "./Home.css";
import "./pizzas"
import { pizzas } from "./pizzas";

function Home() {
  return (
    <>
      <Header />
      <section className="contenedorPizzas">
        


        
        {/* CardPizza ⬇️*/}
        {pizzas.map((pizza, index) => (
          <CardPizza
          key={index}
          name = {pizza.name}
          price={pizza.price}
          ingredients={pizza.ingredients}
          img={pizza.img}
          ></CardPizza>
        ))}
       
      </section>
    </>
  );
}

export default Home;
