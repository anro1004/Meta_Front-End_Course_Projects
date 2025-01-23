import React from "react";
import "./Dish.css";

const Dish = ({ plate }) => {
  return (
    <div className="dish">
      <h2>{plate.name}</h2>
      <p>{plate.description}</p>
      <span>{plate.price}</span>
    </div>
  );
};

export default Dish;
