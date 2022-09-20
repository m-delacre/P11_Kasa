import React from "react";
import { useParams, useNavigate } from 'react-router-dom'
import data from "../../mockapi/data";
import Depliant from "../../components/Depliant";
import './logementStyle.css'
import Rating from "../../components/Rating";
import TagList from "../../components/TagList";
import Carrousel from "../../components/Carrousel";
import { useEffect } from 'react';

function Logement() {
    const {indexLogement} = useParams();
    const logement = data.find(logement => logement.id === indexLogement);
    
    let navigate = useNavigate();
    useEffect(() => {
        if (logement === undefined) {
         navigate("404", { replace: true });
        }
    }, [indexLogement])
      
    if (logement === undefined) {
        return null;
    }
    
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
                <div className="logement">
                    <div className="logement-Left">
                        <div className="logement-left-text">
                            <p className="logement--textBold">{logement.title}</p>
                            <p>{logement.location}</p>
                        </div>
                        
                        <div className="logement-left-tag">
                           <TagList tags={logement.tags}/> 
                        </div>
                    </div>
                    <div className="logement-Right">
                        <div className="logement-rightinfo">
                            <div className="logement-right--name">
                                <p>{hostPre}</p>
                                <p>{hostNom}</p>
                            </div>
                            <div className="logement-right--img">
                                <img src={logement.host.picture} alt={`profil pic`}/>
                            </div>
                        </div>
                        <div className="rating">
                            <Rating rate={logement.rating}/>
                        </div>    
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
