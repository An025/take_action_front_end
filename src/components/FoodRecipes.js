import axios from "axios";
import React, { useState, useEffect } from "react";

// Can I change 'props' to '()'?
const FoodRecipes = props => {
    
    const [state, setRecipeData] = useState({
        recipeData: []
    })

    require('dotenv').config();
    const apiKey = process.env.REACT_APP_API_KEY_SPOONACULAR;
    console.log(apiKey);
    console.log("ASD");
    const url = "https://api.spoonacular.com/recipes/complexSearch";

    useEffect(() => {
        axios.get(url, {
            params: {
                apiKey: apiKey,
                cuisine: "italian",
                diet: "vegetarian"
            }
        })
        .then(response => {
            console.log(response);
            setRecipeData({recipeData: response});
        })
        .catch(error => console.log(error))
    }, [])

    return(
        <div>
            Hi from FoodRecipes
            { console.log(state.recipeData) }
        </div>
    )

}

export default FoodRecipes