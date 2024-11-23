
function Button() {
    const handleClick = () => console.log('clicked')
    const handleOver = function () {
        return (
            console.log('mouse over')
        );
    }

    return (
        <button onClick={handleClick}
            onMouseOver={handleOver}>
            Click Me
        </button>
    );
}

export default Button;