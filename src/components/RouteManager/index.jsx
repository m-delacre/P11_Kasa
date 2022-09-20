import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home/index.jsx';
import About from '../../pages/About/index.jsx'
import Error from '../Error/index.jsx'
import Header from '../Header/index.jsx';
import Logement from '../../pages/Logement/index.jsx';
import ScrollToTop from '../ScrollTop/index.jsx';

function RouteManager(){
    return(
    <Router>
      <ScrollToTop/>
      <Header/>
        <Routes>
          {/*Page d'acceuil*/}
          <Route exact path="/" element={<Home/>}/>
          {/*Page a propos*/}
          <Route path="about" element={<About/>} />
          {/*Page erreur*/}
          <Route path="*" element={<Error/>} />
          <Route path="404" element={<Error/>} />
          {/*Page logement avec params */}
          <Route path="logement/:indexLogement" element={<Logement/>}/>
        </Routes>
    </Router>
    )
}

export default RouteManager;