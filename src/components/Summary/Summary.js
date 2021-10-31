import React from 'react';
import EVSummary from './EVSummary';
import footprint from '../images/footprint.gif'

import  './Footprint.scss';


const Summary = props =>{


return(
    <div>
        <img className="footprint" src={ footprint } alt="footprint" ></img>
        <EVSummary/>
    </div>
    )
}

export default Summary;
