import './App.css';
import Heading from './components/Heading';
import Card from "./components/Card";
import Button from './components/Button';
import InputComponent from './components/ImputComponent';
import Fruits from './components/Fruits';
import FruitsCounter from './components/FruitsCounter';

function App() {

  function handleClick() {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    console.log(randomNum);
    let userInput = prompt('type a number');
    alert(`Computer number: ${randomNum}, Your guess: ${userInput}`);
  }

  const [fruits] = React.useState([
    {fruitName: 'apple', id: 1},
    {fruitName: 'apple', id: 2},
    {fruitName: 'plum', id: 3},
]);

  return (<div className="App">
    This is the starting code for "Your first component" ungraded lab
    <Heading firstName="Andy" />

    <h1>Task: Add three Card elements</h1>
    <Card h2="First card's h2" h3="First card's h3" />
    <Card h2="Second card's h2" h3="Second card's h3" />
    <Card h2="Third card's h2" h3="Third card's h3" />
    <Button />

    <div className='RamdonNumber'>
      <h1>Task: Add a button and handle a click event</h1>
      <button onClick={handleClick}>Guess the number between 1 and 3</button>
    </div>

    <InputComponent />

    <div>
      <h1>Where should the state go?</h1>
      <Fruits fruits={fruits} />
      <FruitsCounter fruits={fruits} />
    </div>

  </div>
  );
}

export default App;
