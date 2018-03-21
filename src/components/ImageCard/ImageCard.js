import React from "react";
import "./Image.css";

const ImageCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} onClick={() => props.sortImages(props.id)}/>
    </div>
  </div>
);

export default ImageCard;
