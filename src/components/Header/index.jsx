import React from "react";
import { Link, useLocation} from 'react-router-dom';
import logo from '../../assets/images/logo.png'
import '../Header/header.css'

function Header(){
    const location = useLocation();

    return(
        <div className="containerHeader">
            <div className="containerHeaderPos">
                <div className="containerLogo">
                    <img className="logoHeader" src={logo} alt="logo"/>
                </div>
                <div className="containerText">
                    {location.pathname === "/" ? <Link className="pagesLink--active" to="/">Accueil</Link> : <Link className="pagesLink" to="/">Accueil</Link>}
                    {location.pathname === "/about" ? <Link className="pagesLink--active" to="/about">A Propos</Link> : <Link className="pagesLink" to="/about">A Propos</Link>}
                </div>    
            </div>
            
        </div>
    )
}

export default Header;