import React from 'react';
import EVSummary from './EVSummary';
import TransportSummary from './TransportSummary';
import footprint from '../images/footprint.gif'
import  './Footprint.scss';
import RecipeSummary from './RecipeSummary';



const Summary = props =>{

return(
    <div>
        <img className="footprint" src={ footprint } alt="footprint" ></img>
        <EVSummary/>
        <RecipeSummary/>
        <TransportSummary />
    </div>
    )
}

export default Summary;
