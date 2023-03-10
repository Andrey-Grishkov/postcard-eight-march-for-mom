import React from "react";
import './Navigation.css';
import {MAIN_NAVIGATION} from '../../utils/constants';
import NavigationItem from '../NavigationItem/NavigationItem'

function Navigation({handleClickNavigation}) {

  return (
      <nav className='navigation'>
        <ul className='navigation__links'>
          {MAIN_NAVIGATION.map((foto, item) => (
            <NavigationItem
              classImg={foto.classImg}
              flag={foto.flag}
              handleClickNavigation={handleClickNavigation}
              key={item}
            />
          ))}
        </ul>
      </nav>
  );
}

export default Navigation;
