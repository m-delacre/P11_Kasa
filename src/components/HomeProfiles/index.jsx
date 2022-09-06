import React from "react";
import styled from 'styled-components';
import data from '../../mockapi/data';
import CardProfile from "../CardProfile";

const ContainerProfils = styled.div`
  width: 100%;
  height: fit-content;
  margin-bottom: 50px;
  margin-top: 30px;
  display:flex;
  justify-content: center;
  align-items: center;
`

const BackgroundProfils = styled.div`
  width: auto;
  height: fit-content;
  background-color: red;
  margin-left: 50px;
  margin-right: 50px;
  border-radius: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 0px;
`

function HomeProfiles() {
    return (
      <React.Fragment>
        <ContainerProfils>
            <BackgroundProfils>
              {data.map( (logement, index) =>(
                <CardProfile
                  key={`${logement.title}-${index}`}
                  id={logement.id}
                  title={logement.title}
                  cover={logement.cover}
                />
              ) )}
            </BackgroundProfils>
        </ContainerProfils>
      </React.Fragment>
    );
  }
  
  export default HomeProfiles;