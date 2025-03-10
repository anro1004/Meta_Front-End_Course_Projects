import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import logo from "./assets/Asset 16@4x.png";
import logo2 from "./assets/Asset 20@4x.png";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import Menupage from "./components/Menupage";
import Booking from "./components/Booking";
import ConfirmedBooking from "./components/ConfirmedBooking";
import About from "./components/About";

const navLinks = [
  { path: "/", text: "Home" },
  { path: "/menu", text: "Menu" },
  { path: "/booking", text: "Book" },
  { path: "/about", text: "About" },
];

function App() {
  return (
    <>
      <Header imageSrc={logo} />
      <Router>
        <Nav links={navLinks} />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/menu" element={<Menupage/>} />
          <Route path="/booking" element={<Booking/>} />
          <Route path="/confirmed" element={<ConfirmedBooking />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
      <Footer imgSrc={logo2} />
    </>
  );
}

export default App;
