import React from "react";
import Dish from "./Dish";

const Menuseccion = ({ plates }) => {
    return (
          <ul>
            {plates.map((plate, index) => (
              <li key={index}>
                <Dish plate={plate} />
              </li>
            ))}
          </ul>
      );
};

export default Menuseccion;