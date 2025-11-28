import { useContext} from "react";
import Header from "../../components/Header/Header";
import "./Home.css";
import CardPizza from "../../components/CardPizza/CardPizza";
import { MyContext } from "../../Context";

function Home() {
  const {pizzas} = useContext(MyContext)
  return (
    <>
      <Header />
      <section className="contenedorPizzas">
       

        {pizzas.length > 0 &&
          pizzas.map((pizza) => (
            <CardPizza
              key={pizza.id}
              id={pizza.id}
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
