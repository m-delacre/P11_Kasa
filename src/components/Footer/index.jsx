import React from "react";
import styled from 'styled-components';
import logo from '../../assets/images/logoBlanc.png'


const ContainerFooter = styled.div`
  width: 100%;
  height: 200px;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0;
  padding-top: 20px;
  padding-bottom: 10px;
`
const LogoFooter = styled.img`
  width: 200px;
  height: 40%;
  margin: 0;
`

const Watermark = styled.p`
  height: 20%
  font-size: 20px;
  color: white;
  padding: 10px;

  @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
    color: red;
  }
`

function Footer(){
    return(
        <ContainerFooter>
          <LogoFooter src={logo} alt="logo kasa"></LogoFooter>
          <Watermark>©2020 Kasa. All rights reserved</Watermark>  
        </ContainerFooter>
    );
}

export default Footer;