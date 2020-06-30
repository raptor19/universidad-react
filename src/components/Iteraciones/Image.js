import React from "react";
import "./ListComponents.css";

const Image = ({ image }) => {
  return (
    <div className="card">
      <img className="image" src={image.source} alt="Imagen" />
      <div className="footer">
        <img className="avatar" src={image.author.avatar} alt="Avatar" />
        <div>{image.author.name}</div>
        <div>
          <p>Vistas: {image.views}</p>
        </div>
      </div>
    </div>
  );
};

export default Image;
