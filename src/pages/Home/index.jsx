import React from "react";
import Banner from "../../components/Banner";
import HomeProfiles from "../../components/HomeProfiles";
import bannerImg from '../../assets/images/Baniere.png'
import './home.css'

function Home() {
  return (
    <React.Fragment>
      <div className="bannerPosition">
        <Banner
          img = {bannerImg}
          text = "Chez vous, partout et ailleurs"
        />
      </div>
      
      <HomeProfiles/>
    </React.Fragment>
  );
}

export default Home;
