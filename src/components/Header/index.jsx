import React from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png'

const ContainerHeader = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 50px;
`
const ContainerLogo = styled.div`
    width: auto;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 50px;
`

const LogoHeader = styled.img`
    width: 200px;
    height: 80px;
`
const ContainerText = styled.div`
    width: 350px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 50px;
`

const PagesLink = styled(Link)`
    font-size: 30px;
    text-decoration: none;
    font-weight: 500;
`

function Header(){
    return(
        <ContainerHeader>
            <ContainerLogo>
                <LogoHeader src={logo} alt="logo"/>
            </ContainerLogo>
            <ContainerText>
                <PagesLink to="/">Accueil</PagesLink>
                <PagesLink to="/about">A Propos</PagesLink>
            </ContainerText>   
        </ContainerHeader>
    )
}

export default Header;