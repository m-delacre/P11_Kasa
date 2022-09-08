import React from "react";
import './banner.css'

function Banner(props) {
    return (
        <div className="containerBanner">
          <div className="bannerContour">
            <img  className="bannerDeco" src={props.img} alt="illustration"/>
            {props.text ? <p className="textBanner">{props.text}</p>:<p></p>}
          </div>
        </div>
    );
  }
  
  export default Banner;