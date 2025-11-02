/* eslint-disable react/prop-types */
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import "./CardPizza.css";

function CardPizza({ name, img, ingredients, price }) {
  return (
    <>
      <Card style={{ width: "28rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title className="tituloPizza">{name}</Card.Title>
          <Card.Text>
            <h6>Ingredientes:</h6>
            {ingredients.join(", ")}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Precio: ${price.toLocaleString()}</ListGroup.Item>
        </ListGroup>
        <Card.Body className="botonesCard">
          <Button variant="primary">Ver Más</Button>
          <Button variant="dark">Añadir</Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default CardPizza;
