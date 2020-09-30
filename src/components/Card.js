import React, { useState } from "react";
import "../styles/styles.css";

function Card({ title, description, id, addToBag }) {
  return (
    <>
      <div
        className="card"
        onClick={() => addToBag({ title, description, id, unite: 1 })}
      >
        <h3>{title}</h3>
        <span>{description}</span>
        <span>{id}</span>
      </div>
    </>
  );
}

export default Card;
