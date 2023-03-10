import React from "react";
import './Foto.css';

function Foto({onCardClick, fotograph}) {

  function handleClick() {
    onCardClick(fotograph);
  }

  return (
    <li className="foto">
      <img className="foto__item" src={fotograph.img} alt={fotograph.description} onClick={handleClick}/>
    </li>
  );
}

export default Foto;
