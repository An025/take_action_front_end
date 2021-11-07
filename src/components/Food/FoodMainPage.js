import React from "react";
import TopInfo from './TopInfo';
import RecipeSelection from './RecipeSelection';

// Can I change 'props' to '()'?
const FoodMainPage = props => {
    
    const headerStyle = {
        textAlign: 'center',
        margin: '15px'
    };

    return(
        <div>
            <h1 style={headerStyle}>Meat production is burdensome</h1>
            <p style={headerStyle}>The carbon footprint of the most often consumed types is:</p>
            <TopInfo/>
            <h1 style={headerStyle}>Eat less meat with these wonderful recipees:</h1>
            <RecipeSelection/>
            <h1 style={headerStyle}>Check your "green-meal" history:</h1>
            {/* <Link to="food/summary">See statistics!</Link> */}
        </div>
    )
}

export default FoodMainPage