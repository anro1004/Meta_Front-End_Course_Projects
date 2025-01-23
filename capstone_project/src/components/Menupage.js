import React from "react";
import Menuseccion from "./Menuseccion";

const appetaizers = [
  {
    name: "Beef Carpacho",
    description: "Beef Carpacho",
    price: "17",
  },
  {
    name: "Burrata",
    description: "Burrata",
    price: "9",
  },
  {
    name: "Panini",
    description: "Panini",
    price: "12",
  },
];

const entres = [
  {
    name: "Pizza",
    description: "Pizza",
    price: "18",
  },
  {
    name: "Pasta",
    description: "Pasta",
    price: "26",
  },
  {
    name: "Chiken Parmesan",
    description: "Chiken Parmesan",
    price: "21",
  },
];

const dessert = [
  {
    name: "Tiramisu",
    description: "Tiramisu",
    price: "14",
  },
  {
    name: "Limoncelo",
    description: "Limoncelo",
    price: "15",
  },
  {
    name: "Cheesecake",
    description: "Cheesecake",
    price: "14",
  },
];

const Menupage = () => {
  return (
    <>
      <Menuseccion plates={appetaizers} title="Appetaizers" />
      <Menuseccion plates={entres} title="Entrees" />
      <Menuseccion plates={dessert} title="Dessert" />
    </>
  );
};

export default Menupage;
