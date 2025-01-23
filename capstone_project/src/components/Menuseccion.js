import React from "react";
import Dish from "./Dish";
import "./Menuseccion.css";

const Menuseccion = ({ plates, title }) => {
    return (
          <ul className="menuseccion">
            <h2 className="menuseccion-header">{title}</h2>
            {plates.map((plate, index) => (
              <li key={index} className="menuseccion-item">
                <Dish plate={plate} />
              </li>
            ))}
          </ul>
      );
};

export default Menuseccion;