import React from 'react';


const Card = props =>{
  
    return <div className={props.createStyle}>
        <h1>{props.title}</h1>
        {props.children}
        </div>
}

export default Card;

