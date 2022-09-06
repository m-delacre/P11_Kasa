import React from "react";
import styled from 'styled-components';

const ContainerBanner = styled.div`
  width: 100%;
  height: 180px;
  margin-bottom: 50px;
  margin-top: 30px;
`

const Banner = styled.div`
  width: auto;
  height: 100%;
  background-color: grey;
  margin-left: 50px;
  margin-right: 50px;
  border-radius: 20px;
`

function HomeBanner() {
    return (
      <React.Fragment>
        <ContainerBanner>
          <Banner/>
        </ContainerBanner>
      </React.Fragment>
      
    );
  }
  
  export default HomeBanner;