import React from "react";
import './Foto.css';

function Foto({onCardClick, fotograph}) {

  function handleClick() {
    onCardClick(fotograph);
  }

  return (
    <li className="foto-book__item-container">
      <img className="foto-book__item" src={fotograph.img} alt={fotograph.description} onClick={handleClick}/>
    </li>
  );
}

export default Foto;
