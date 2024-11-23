function Fruits(props) {
    return (
        <div>
            <h2>List of Fruits</h2>
            <ul>
                {props.fruits.map(fruit => <li key={fruit.id}>{fruit.fruitName}</li>)}
            </ul>
        </div>
    )
}

export default Fruits