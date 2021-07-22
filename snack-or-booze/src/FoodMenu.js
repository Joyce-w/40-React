import React from "react";
import { Link } from "react-router-dom";
import "./FoodMenu.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem
} from "reactstrap";

function FoodMenu({ items, category }) {
  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {category} Menu
          </CardTitle>
          <CardText>
            <span>Some quick example text to build on the card title and make up the
            bulk of the card's content.</span>
          </CardText>
          <ListGroup>
            {/* map through corresponding food menu to create links to each item */}
            {items.map(snack => (
              <Link to={`/${category}/${snack.id}`} key={snack.id}>
                <ListGroupItem>{snack.name}</ListGroupItem>
              </Link>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </section>
  );
}

export default FoodMenu;
