import React, { useState, useEffect } from "react";
import "./Card.css";

const Card = ({ image, name, description }) => {
  const [gradient, setGradient] = useState(
    "linear-gradient(to right, #ff0000, #ffff00)"
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const colors = [
        "#ff0000",
        "#ffff00",
        "#00ff00",
        "#00ffff",
        "#0000ff",
        "#ff00ff",
      ];
      const randomColor1 = colors[Math.floor(Math.random() * colors.length)];
      const randomColor2 = colors[Math.floor(Math.random() * colors.length)];
      setGradient(
        `linear-gradient(to right, ${randomColor1}, ${randomColor2})`
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="card" style={{
        padding: "1rem",
        position: "relative",
        color: "blue",
        background: gradient,
        padding: "3px",
        height: "max-content",
        width: "max-content",
        }}>
            <div className="card-content">
        <img src={image} alt={name} className="card-img"/>
        <h2 className="card-title">{name}</h2>
        <p className="card-description">{description}</p>
        </div>
    </div>
  );
};

export default Card;
