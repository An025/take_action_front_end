import React from 'react';
import EVSummary from './EVSummary';
import TransportSummary from './TransportSummary';
import footprint from '../images/footprint.gif'
import  './Footprint.scss';
import RecipeSummary from './RecipeSummary';



const Summary = props =>{
    const aboutContainer = {
        width: '80vw',
        marginBottom: '150px'
    }
    

return(
    <div style={aboutContainer}>
        <img className="footprint" src={ footprint } alt="footprint" ></img>
        <EVSummary/>
        <RecipeSummary/>
        <TransportSummary />
    </div>
    )
}

export default Summary;
