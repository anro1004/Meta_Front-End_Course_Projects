import React from "react";

const Dish = ({ plate }) => {
  return (
    <div>
      <h2>{plate.name}</h2>
      <p>{plate.description}</p>
      <h3>{plate.price}</h3>
    </div>
  );
};

export default Dish;