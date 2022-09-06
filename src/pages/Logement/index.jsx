import React from "react";
import { useParams } from 'react-router-dom'
import data from "../../mockapi/data";

function Logement() {
    const {indexLogement} = useParams();
    const logementFilter = data.filter(logement => logement.id === indexLogement)
    const logement = logementFilter[0];

    return (
        <React.Fragment>
        {/* component caroussel */}
        <p>{logement.title}</p>
        <p>{logement.location}</p>
        {/* pour le nom il va falloir découper à l'espace .split() */}
        <p>{logement.host.name}</p>
        <img src={logement.host.picture} alt={`profil pic`}/>
        <p> Description : {logement.description}</p>
        <div>
            <p>Equipement : </p>
            <ul>
                {logement.equipments.map((equipement) =>(
                    <p key={`${logement.id}-${equipement}`}>{equipement}</p>
                ))}
            </ul>
        </div>

        </React.Fragment>
    );
}

export default Logement;
