import axios from "axios";
import React, { useState, useEffect } from "react";

// Can I change 'props' to '()'?
const RecipeeFetch = props => {
    
    console.log("asd");
    console.log(props.vegan);

    const [state, setRecipeData] = useState({
        recipeData: []
    })

    require('dotenv').config();
    const apiKey = process.env.REACT_APP_API_KEY_SPOONACULAR;
    const url = "https://api.spoonacular.com/recipes/complexSearch";

    // Available filters with possible values (later to be moved into another file)
    const cuisine = [];
    const excludeCuisine = [];
    const diet = [];
    const intolerances = [];
    const includeIngredients = [];
    const excludeIngredients = [];
    const type = [];
    const instructionsRequired = [];
    const fillIngredients = []; // ???
    const addRecipeInformation = [];
    const addRecipeNutrition = [];
    const titleMatch = [];
    const maxReadyTime = [];

    useEffect(() => {
        axios.get(url, {
            params: {
                apiKey: apiKey,
                cuisine: "italian",
                diet: "vegetarian",
                instructionsRequired: "true",
                addRecipeInformation: "true"
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
            Hello from RecipeeFetch
        </div>
    )

}

export default RecipeeFetch