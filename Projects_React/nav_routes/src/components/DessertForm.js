import DessertsList from "./DessertList";
import DessertInput from "./DessertInput";
import { useState } from "react";

function DessertForm() {

    const [allDesserts, setAllDesserts] = useState([
        {
            name: "Chocolate Cake",
            calories: 400,
            createdAt: "Andy",
        },
        {
            name: "Ice Cream",
            calories: 200,
            createdAt: "Ale",
        },
        {
            name: "Tiramisu",
            calories: 300,
            createdAt: "Carlo",
        },
        {
            name: "Cheesecake",
            calories: 600,
            createdAt: "Maco",
        },
    ]);

    function addDessert(dessert) {
        setAllDesserts([...allDesserts, dessert]);
    }

    return (
        <>
            <DessertInput onAdd={addDessert} />
            <DessertsList data={allDesserts} />
        </>
    );
}

export default DessertForm;