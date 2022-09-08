import React from "react";
import './rating.css'
import Like from '../../assets/images/Like.png'
import NoLike from '../../assets/images/unLike.png'

function Rating(props){
    const rating = props.rate;
    const range = [1,2,3,4,5]

    return(
        <React.Fragment>
            {range.map((rangeElement, index)=>
                rating >= rangeElement ? <img src={Like} alt="rating star" key={`star--${index}`}/> : <img src={NoLike} alt="rating star" key={`star--${index}`}/>
            )}
        </React.Fragment>
    )
}

export default Rating;