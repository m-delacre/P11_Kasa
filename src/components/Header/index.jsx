import React from "react";
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png'
import '../Header/header.css'

function Header(){
    return(
        <div className="containerHeader">
            <div className="containerHeaderPos">
                <div className="containerLogo">
                    <img className="logoHeader" src={logo} alt="logo"/>
                </div>
                <div className="containerText">
                    <Link className="pagesLink" to="/">Accueil</Link>
                    <Link className="pagesLink" to="/about">A Propos</Link>
                </div>    
            </div>
            
        </div>
    )
}

export default Header;