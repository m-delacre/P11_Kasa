import React from "react";
//import { Link } from 'react-router-dom';
//import data from '../../mockapi/data';
import HomeBanner from "../../components/HomeBanner";
import HomeProfiles from "../../components/HomeProfiles";

function Home() {
  return (
    <React.Fragment>
      <HomeBanner/>
      <HomeProfiles/>
    </React.Fragment>
  );
}

export default Home;
