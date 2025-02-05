import React from "react";
import Article from "./Article";
import Mainarticle from "./Mainarticle";
import "./Homepage.css";
import OurMenuPhoto from "../assets/Our Menu.jpg";
import BookingPhoto from "../assets/Book a Table.jpg";
import OpeningHoursPhoto from "../assets/Opening Hours.jpg";
import { Link } from "react-router-dom";


const ActualOfert = {
    title: "Happy Hour",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et congue massa, eu fringilla mauris. Fusce dapibus vehicula ex at ultrices. Duis at varius ligula. Integer pulvinar tempus quam, et consequat nulla viverra in. Nullam ut tortor magna. Nulla eget placerat leo. Nunc eu finibus magna, sed vulputate magna.",
}
const OurMenu = {
    title: "Our Menu",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et congue massa, eu fringilla mauris. Fusce dapibus vehicula ex at ultrices. Duis at varius ligula. Integer pulvinar tempus quam, et consequat nulla viverra in. Nullam ut tortor magna. Nulla eget placerat leo. Nunc eu finibus magna, sed vulputate magna.",
}
const Booking = {
    title: "Book a table",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et congue massa, eu fringilla mauris. Fusce dapibus vehicula ex at ultrices. Duis at varius ligula. Integer pulvinar tempus quam, et consequat nulla viverra in. Nullam ut tortor magna. Nulla eget placerat leo. Nunc eu finibus magna, sed vulputate magna.",
}
const OpeningHours = {
    title: "Opening Hours",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et congue massa, eu fringilla mauris. Fusce dapibus vehicula ex at ultrices. Duis at varius ligula. Integer pulvinar tempus quam, et consequat nulla viverra in. Nullam ut tortor magna. Nulla eget placerat leo. Nunc eu finibus magna, sed vulputate magna.",
}
const Homepage = () => {
  return (
    <>
      <div className="mainarticle">
        <Mainarticle title={ActualOfert.title} description={ActualOfert.description} />
      </div>
      <div className="articles">
        {/* Convertimos los artículos en enlaces */}
        <Link to="/menu" className="article-link">
          <div className="article">
            <Article title={OurMenu.title} imageSrc={OurMenuPhoto} description={OurMenu.description} />
          </div>
        </Link>
        <Link to="/booking" className="article-link">
          <div className="article">
            <Article title={Booking.title} imageSrc={BookingPhoto} description={Booking.description} />
          </div>
        </Link>
        <Link to="/about" className="article-link">
          <div className="article">
            <Article title={OpeningHours.title} imageSrc={OpeningHoursPhoto} description={OpeningHours.description} />
          </div>
        </Link>
      </div>
    </>
  );
};

export default Homepage;
