import React, { useState } from "react";
import "./dessertInputStyles.css"

function DessertInput(props) {

    const [dessertData, setDessertData] = useState({ name: "", calories: "", createdAt: "" });

    function changeHandler(e) {
        setDessertData({ ...dessertData, [e.target.name]: e.target.value })
    }
    function submitHandler(e) {
        e.preventDefault();
        props.onAdd(dessertData);
        setDessertData({ name: "", calories: "", createdAt: "" });
    }

    return (
        <div>
            <h1>
                Add a New Dessert
            </h1>
            <form onSubmit={submitHandler}>
                <input type="text" name="name" placeholder="Name of the Dessert" value={dessertData.name} onChange={changeHandler} />
                <input type="number" name="calories" placeholder="Calories of the Dessert" value={dessertData.calories} onChange={changeHandler} />
                <input type="text" name="createdAt" placeholder="Creator of the Dessert" value={dessertData.createdAt} onChange={changeHandler} />
                <button>Submit Dessert</button>
            </form>
        </div>
    );
}

export default DessertInput;