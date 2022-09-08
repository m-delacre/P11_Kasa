import React from "react";
//import { Link } from 'react-router-dom';
//import data from '../../mockapi/data';
import Banner from "../../components/Banner";
import HomeProfiles from "../../components/HomeProfiles";
import bannerImg from '../../assets/images/Baniere.png'

function Home() {
  return (
    <React.Fragment>
      <Banner
        img = {bannerImg}
        text = "Chez vous, partout et ailleurs"
      />
      <HomeProfiles/>
    </React.Fragment>
  );
}

export default Home;
