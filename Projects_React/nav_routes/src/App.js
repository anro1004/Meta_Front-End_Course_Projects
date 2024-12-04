import "./App.css";
import Homepage from "./components/Homepage";
import AboutLittleLemon from "./components/AboutLittleLemon";
import Contact from "./components/Contact";
import SongSelection from "./components/SongSelection";
import DessertForm from "./components/DessertForm";
import MediaPlayer from "./components/MediaPLayer";
import { Routes, Route, Link } from "react-router-dom";
import logo from "./assets/logo.png";
import SubmitForm from "./components/SubmitForm";
import SelectedDish from "./components/SelectedDish";
import MousePositionComponent from "./components/MousePositionComponent";

function App() {
  return (
    <div>
      <nav>
        <img src={logo} alt="logo" height={200} />
        <Link to="/" className="nav-item">Homepage</Link>
        <Link to="/submitform" className="nav-item">Submit Form</Link>
        <Link to="/songselection" className="nav-item">Song Selection</Link>
        <Link to="/player" className="nav-item">Media PLayer</Link>
        <Link to="/dessertlist" className="nav-item">Dessert List</Link>
        <Link to="/dishselector" className="nav-item">Select Dish</Link>
        <Link to="/about" className="nav-item">About Little Lemon</Link>
        <Link to="/mouseposition" className="nav-item">Mouse Position</Link>
        <Link to="/contact" className="nav-item">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/submitform" element={<SubmitForm />}></Route>
        <Route path="/songselection" element={<SongSelection />}></Route>
        <Route path="/player" element={<MediaPlayer />}></Route>
        <Route path="/dessertlist" element={<DessertForm />}></Route>
        <Route path="/dishselector" element={<SelectedDish />}></Route>
        <Route path="/about" element={<AboutLittleLemon />}></Route>
        <Route path="/mouseposition" element={<MousePositionComponent />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
};
// npx create-react-app .

export default App;