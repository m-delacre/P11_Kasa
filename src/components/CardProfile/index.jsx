import React from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CardBack = styled.div`
    width: 33%;
    height: 300px;
    border: 1px solid black;
    border-radius: 15px;
    position: relative;
`
const LinkCard = styled(Link)`
    text-decoration: none;
    width: 100%;
    height: 100%;
`

const BackgroundImg = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 15px;
`

const NomLogement = styled.p`
    color: white;
    font-size: 30px;
    position: absolute;
    bottom: 10px;
    left: 30px;
`

function CardProfile({id, title, cover}){
    return(
        <React.Fragment>
            <CardBack>
                <BackgroundImg src={cover}/>
                <LinkCard to={`logement/${id}`}><NomLogement>{title}</NomLogement></LinkCard>
            </CardBack>
        </React.Fragment>
    )
}

export default CardProfile;