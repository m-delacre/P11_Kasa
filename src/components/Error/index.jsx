import React from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ContainerError = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0;
    padding: 0;
`

const TextGrand = styled.p`
    width: auto;
    height: auto;
    font-size: 200px;
    font-weight: 700;
    margin: 0;
`
const TextMedium = styled.p`
    width: auto;
    height: auto;
    font-size: 40px;
    margin: 0px;
    margin-bottom: 100px;
`
const RedirectText = styled(Link)`
    width: auto;
    height: auto;    
    font-size: 20px;
    margin: 0;
    margin-top: 70px;
`

function Error() {
  return (
      <ContainerError>
        <TextGrand>404</TextGrand>
        <TextMedium>Oups! la page demandez n'existe pas</TextMedium>
        <RedirectText to="/">Retourner sur la page d'accueil</RedirectText>
      </ContainerError>
  );
}

export default Error;
