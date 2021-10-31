import React from 'react';
import EVSummary from './EVSummary';
import TransportSummary from './TransportSummary';



const Summary = props =>{

return(
    <div>
        <TransportSummary />
        <EVSummary/>
    </div>
    )
}

export default Summary;
