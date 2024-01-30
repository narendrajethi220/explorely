import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Card() {
  return (
    <div className="cards">
      <h1>Check Out these Epic Destinations!</h1>
      <div className="cards_container">
        <div className="cards_wrapper">
          <ul className="cards_items">
            <CardItem
              src="images/image1.jpg"
              text="Cycle through historic streets and uncover Amsterdam's architectural gems"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="images/image2.jpg"
              text="Discover secluded beaches along the vibrant coastline of Goa."
              label="Adventure"
              path="/services"
            />
          </ul>
          <ul className="cards_items">
            <CardItem
              src="images/image5.jpg"
              text="Sail across the turquoise waters and explore the untouched coral reefs of Lakshadweep"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="images/image4.jpg"
              text="Embark on a cultural journey through the iconic neighborhoods of New York City"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="images/image3.jpg"
              text="Hike to breathtaking viewpoints overlooking the scenic Mussoorie hills"
              label="Adventure"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Card;
