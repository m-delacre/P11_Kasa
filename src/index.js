import React from 'react';
import ReactDOM from 'react-dom/client';
import RouteManager from './components/RouteManager';
import Footer from './components/Footer';
import { createGlobalStyle } from 'styled-components';

const GlobaleStyle = createGlobalStyle`
  *{
    font-family: 'Montserrat', sans-serif;
    color: #FF6060;
    font-weight: 400;
  }

  body{
    margin: 0;
    padding: 0;
    croll-behavior: smooth;
  }
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobaleStyle/>
    <RouteManager/>
    <Footer/>
  </React.StrictMode>
);

/* old version
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <GlobaleStyle/>
      <Header/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="about" element={<About/>} />
          <Route path="*" element={<Error/>} />
        </Routes>
      <Footer/>
    </Router>
  </React.StrictMode>
); */

/* le route a appeler dans l'index.js
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from "../pages/Acceuil/acceuil";
import Logement from "../pages/Logement/Logement"
import Page404 from '../pages/Page404/Page404'
import APropos from '../pages/APropos/APropos';

function RouteManager(){
    return <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="/logement/:id" element={<Logement />}></Route>
      <Route path="/props" element ={<APropos />}></Route>
      <Route path="/Proj11Kasa" element={<App />}/>
      <Route path ="*" element ={<Page404/>}></Route>
      <Route path ="/error" element ={<Page404/>}></Route>
      
    
    </Routes>
    </BrowserRouter>

}
export default RouteManager;
*/


/* index js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import Footer from './Component/Footer/footer';
import RouteManager from './Routes/Route';

ReactDOM.render(
  <React.StrictMode>
    <RouteManager/>
   <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals(); */