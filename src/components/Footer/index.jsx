import React from "react";
import logo from '../../assets/images/logoBlanc.png'
import '../Footer/footer.css'

function Footer(){
    return(
        <div className="containerFooter">
          <img className="logoFooter" src={logo} alt="logo kasa"></img>
          <p className="watermark">©2020 Kasa. All rights reserved</p>  
        </div>
    );
}

export default Footer;