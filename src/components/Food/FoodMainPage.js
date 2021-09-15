// import axios from "axios";
import React from "react";
import TopInfo from './TopInfo';
import RecipeeFilters from './RecipeeFilters';

// Can I change 'props' to '()'?
const FoodMainPage = props => {
    
    const headerStyle = {
        textAlign: 'center'
    };

    return(
        <div>
            <h1 style={headerStyle}>Meat production is burdensome</h1>
            <p style={headerStyle}>The carbon footprint of the most often consumed types is:</p>
            <TopInfo/>
            <h1 style={headerStyle}>Eat less meat with these wonderful recipees:</h1>
            <RecipeeFilters/>
            
        </div>
    )

}

export default FoodMainPage