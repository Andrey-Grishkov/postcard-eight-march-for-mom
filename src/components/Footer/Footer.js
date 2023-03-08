import React from "react";
import './Footer.css';
import FooterRose from '../../images/footerRose.png'

function Footer() {
  return (
    <footer className="footer">
      <img src={FooterRose} className='footer__image'/>
    </footer>
  );
}

export default Footer;
