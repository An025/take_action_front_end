import { SportsRugbySharp } from '@material-ui/icons';
import { withThemeCreator } from '@material-ui/styles';
import React from 'react';


const Card = props =>{
  
    return <div className={props.style}>
        <h1>{props.title}</h1>
        {props.children}
        </div>
}

export default Card;

