import React from "react";
import { Link } from 'react-router-dom';
import '../Error/error.css';

function Error() {
  return (
      <div className="containerError">
        <p className="textGrand">404</p>
        <p className="textMedium">Oups! la page demandez n'existe pas</p>
        <Link className="redirectText" to="/">Retourner sur la page d'accueil</Link>
      </div>
  );
}

export default Error;
