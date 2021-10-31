import React from 'react';
import EVSummary from './EVSummary';
import footprint from '../images/footprint.gif'

import  './Footprint.scss';


const Summary = props =>{


return(
    <div>

        <EVSummary/>
        <img className="footprint" src={ footprint } alt="footprint" ></img>

    </div>
    )
}

export default Summary;
