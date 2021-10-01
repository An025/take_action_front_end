import axios from "axios";
import React, { useState, useEffect } from "react";
import Recipee from "./Recipee";

// Can I change 'props' to '()'?
const RecipeeFetch = props => {

    const [state, setRecipeData] = useState({
        recipeData: []
    })

    require('dotenv').config();
    const apiKey = process.env.REACT_APP_API_KEY_SPOONACULAR;
    const url = "https://api.spoonacular.com/recipes/complexSearch";

    // Available filters with possible values (later to be moved into another file)
    // const excludeCuisine = [];
    // const intolerances = [];
    // const includeIngredients = [];
    // const excludeIngredients = [];
    // const type = [];
    // const instructionsRequired = [];
    // const fillIngredients = []; // ???
    // const addRecipeInformation = [];
    // const addRecipeNutrition = [];
    // const titleMatch = [];
    // const maxReadyTime = [];

    useEffect(() => {
        axios.get(url, {
            params: {
                apiKey: apiKey,
                cuisine: props.cuisine,
                diet: props.diet,
                instructionsRequired: "true",
                addRecipeInformation: "true"
            }
        })
        .then(response => {
            
            console.log(response.data.results);
            setRecipeData({recipeData: response.data.results});
        })
        .catch(error => console.log(error))
    }, [props])

    const cardContainerStyle = {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        // justifyContent: 'left',
        flexWrap: 'wrap',
        gap: '10px 20px',
        justifyContent: 'center'    
    };

    return(
        <div style={cardContainerStyle}>
            {state.recipeData.map((recipee) => (<Recipee key={recipee.id} recipee={recipee}/>))}

        </div>
    )

}

export default RecipeeFetch