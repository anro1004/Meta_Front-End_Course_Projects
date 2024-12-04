import { useState } from "react";
import { RadioGroup, RadioOption } from "./RadioGroup";

function SelectedDish (){

    const [option, setOption] = useState("")

    return(
        <div>
            <h2>Lista de Platos:</h2>
            <RadioGroup onChange={setOption} selected={option}>
                <RadioOption value="Pizza">Pizza</RadioOption>
                <RadioOption value="Pasta">Pasta</RadioOption>
                <RadioOption value="Panini">Panini</RadioOption>
            </RadioGroup>
            <h2>Plato seleccionado: {option}</h2>
        </div>
    )
}

export default SelectedDish;