import React from "react";
import './taglist.css';

function TagList(props){
    const tags = props.tags;

    return(
        <div className="tagList">
            {tags.map((tag, index)=>{
                return <p className="tag" key={`logement tag--${tag}--${index}`}>{tag}</p>
            })}
        </div>
    )
}

export default TagList;