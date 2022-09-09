import React, { useState } from 'react';
import './carrousel.css';
import arrow from '../../assets/images/arrowDepliant.png'

function Carrousel(props){
    const [pic, updatePic] = useState(0);
    let src = props.picture[pic];

    function NextPicture(){
        if(pic + 1 > props.picture.length - 1){
            updatePic(0)
        }
        else{
            updatePic(pic + 1)
        }
    }

    function PreviousPicture(){
        if(pic - 1 < 0){
            updatePic(props.picture.length - 1)
        }
        else{
            updatePic(pic - 1)
        }
    }

    return(
        <div className='carrouselGlobal'>
            <img className='carrousel--Img' src={src} alt={`de présentation numéro ${pic + 1}`}></img>
            {props.nombrePhotos > 1 ? <button className='carrousel--arrowLeft' onClick={PreviousPicture}><img src={arrow} alt='précédent'/></button> : <span></span>}
            {props.nombrePhotos > 1 ? <button className='carrousel--arrowRight'onClick={NextPicture}><img src={arrow} alt='suivant'/></button> : <span></span>}
            <p className='carrousel--NbPhoto'>{`${pic+1}/${props.nombrePhotos}`}</p>
        </div>
    )
}

export default Carrousel;