import React from "react";
import Dish from "./Dish";

const Menuseccion = ({ plates }) => {
    return (
          <ul>
            {plates.map((plates, index) => (
              <li key={index}>
                <Dish plates={plates} />
              </li>
            ))}
          </ul>
      );
};

export default Menuseccion;