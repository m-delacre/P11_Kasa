import React from "react";
import { useParams } from 'react-router-dom'
import data from "../../mockapi/data";
import Depliant from "../../components/Depliant";
import './logementStyle.css'
import Rating from "../../components/Rating";
import TagList from "../../components/TagList";
import Carrousel from "../../components/Carrousel";

function Logement() {
    const {indexLogement} = useParams();
    const logementFilter = data.filter(logement => logement.id === indexLogement)
    const logement = logementFilter[0];

    const fullName = logement.host.name;
    const splitName = fullName.split(' ');
    const hostPre =  splitName[0];
    const hostNom =  splitName[1];

    return (
        <div className="logementGlobale">
            <div className="logementGlobalePos">
                <Carrousel 
                    picture = {logement.pictures}
                    nombrePhotos = {logement.pictures.length}
                />
                <div className="logementInfo">
                    <div className="logementInfo--left">
                        <p className="logement--textBold">{logement.title}</p>
                        <p>{logement.location}</p>
                    </div>
                    <div className="logementInfo--right">
                        <div className="logementInfo--right--name">
                            <p>{hostPre}</p>
                            <p>{hostNom}</p>
                        </div>
                        <div className="logementInfo--right--img">
                            <img src={logement.host.picture} alt={`profil pic`}/>
                        </div>
                    </div>
                </div>
                <div className="tagETrating">
                    <div className="tag">
                        <TagList tags={logement.tags}/>
                    </div>
                    <div className="rating">
                        <Rating rate={logement.rating}/>
                    </div>
                </div>
                <div className="logement--Depliants">
                    <Depliant 
                        titre = "Description"
                        description = {logement.description}
                    />
                    <Depliant 
                        equipements = {logement.equipments}
                    />
                </div>
            </div>
            
        </div>
    );
}

export default Logement;
