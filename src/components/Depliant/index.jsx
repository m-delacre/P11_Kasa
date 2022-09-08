import React from "react";
import {useState} from 'react'
import arrow from '../../assets/images/arrowDepliant.png'
import './depliant.css'

function Depliant(props){
    const [isOpen, setIsOpen] = useState(true)

    return (
        <div className="depliant" onClick={()=>{setIsOpen(!isOpen)}}>
            <div className={isOpen ? "depliantFermer":"depliantOuvert"}>
                <p>{props.equipements ? "Équipements":props.titre}</p>
                <img src={arrow} alt="derouler"/>
            </div>
            <div className="contenuDepliant" style={isOpen ? {display:"none"}:{display:"block"}}>
                {props.equipements ? <ul>{
                    props.equipements.map((element, index)=>{
                        return <li key ={`${index}-${props.id}`}>{element}</li>
                    })
                }</ul>
                :<p>{props.description}</p>}
            </div>
        </div>
    )
}

export default Depliant;