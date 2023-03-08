import React from "react";
import './Header.css';
import HeaderRose from '../../images/headerRose.png';
import { useLocation } from "react-router-dom";

function Header() {

  const location = useLocation();
  let about_team;
  location.pathname === "/foto-albom" ? (about_team = true) : (about_team = false);

  return (
    <header className="header">
      <img src={HeaderRose} className='header__image'/>

      <a className={`header__link ${about_team ? "header__link_visible" : ""}`} href='/'>На главную</a>

    </header>
  )
}

export default Header;
