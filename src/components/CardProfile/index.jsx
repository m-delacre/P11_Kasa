import React from "react";
import { Link } from 'react-router-dom';
import '../CardProfile/cardProfile.css'

function CardProfile({id, title, cover}){
    return(
            <div className="cardBack">
                <Link to={`logement/${id}`}>
                    <img  className="backgroundImg" src={cover} alt="le logement"/>
                    <p className="nomLogement">{title}</p>
                </Link>
            </div>
    )
}

export default CardProfile;