import React from "react";
import './NavigationItem.css';
import {Link} from "react-router-dom";

function NavigationItem({handleClickNavigation, flag, classImg}) {

  console.log(classImg, 'foto');

  function handleClick() {
    handleClickNavigation(flag);
  }

  return (
        <li className='link'>
          <Link className={`link__item ${classImg}`} to='/foto-albom' onClick={handleClick}>
          </Link>
        </li>
  );
}

export default NavigationItem;
