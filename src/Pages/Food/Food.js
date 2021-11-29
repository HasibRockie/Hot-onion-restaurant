import React from "react";
import { useParams } from "react-router";
import "./Food.css";
import { useState } from "react";
import { useEffect } from "react";
import { ButtonGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import FirebaseAuth from "./../../Firebase/Firebase.authentication";

const Food = () => {
  let { increase, decrease, quantity } = FirebaseAuth();
  const { slug } = useParams();
  const intSlug = parseInt(slug);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    fetch("../APIs/foodItems.json")
      .then((result) => result.json())
      .then((data) => {
        data.forEach((item) => {
          if (item.id === intSlug) {
            setSelected(item);
          }
        });
      });

  }, []);

  return (
    <div className="selected">
      <div className="food-item img-container">
        <img src={selected.image} alt="" />
      </div>
      <div className="food-item">
        <img src="" alt="" />
        <h1 className="item-name">
          Item: <span> {selected.name} </span>
        </h1>
        <br />
        <h1 className="item-details">{selected.details}</h1>
        <hr /> <br />
        <h1 className="item-price">
          Price: <span>$ {(selected.price * quantity).toFixed(2)} </span>
        </h1>
        <br />
        <div className="quantity d-grid gap-2">
          <ButtonGroup aria-label="Basic example">
            <Button onClick={decrease} variant="secondary">
              -
            </Button>
            <span className="quantity-value"> {quantity} </span>
            <Button onClick={increase} variant="secondary">
              +
            </Button>
          </ButtonGroup>

          <Button as={Link} to="/placeorder" variant="danger">
            Place Order
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Food;
