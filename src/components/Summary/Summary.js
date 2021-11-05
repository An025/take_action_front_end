import React from 'react';
import EVSummary from './EVSummary';
import TransportSummary from './TransportSummary';
import footprint from '../images/footprint.gif'
import  './Footprint.scss';



const Summary = props =>{

return(
    <div>
        <img className="footprint" src={ footprint } alt="footprint" ></img>
        <EVSummary/>
        <TransportSummary />
    </div>
    )
}

export default Summary;
