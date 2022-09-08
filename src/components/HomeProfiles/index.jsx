import React from "react";
import data from '../../mockapi/data';
import '../HomeProfiles/homeProfiles.css'
import CardProfile from "../CardProfile";


function HomeProfiles() {
    return (
      <React.Fragment>
        <div className="containerProfils">
            <div className="backgroundProfils">
              {data.map( (logement, index) =>(
                <CardProfile
                  key={`${logement.title}-${index}`}
                  id={logement.id}
                  title={logement.title}
                  cover={logement.cover}
                />
              ) )}
            </div>
        </div>
      </React.Fragment>
    );
  }
  
  export default HomeProfiles;