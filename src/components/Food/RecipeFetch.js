import axios from "axios";
import React, { useState, useEffect } from "react";
import Recipe from "./Recipe";

const RecipeFetch = props => {

    const [state, setRecipeData] = useState({
        recipeData: []
    })

    // require('dotenv').config();
    // const apiKey = process.env.REACT_APP_API_KEY_SPOONACULAR;
    // const url = "https://api.spoonacular.com/recipes/complexSearch";
    let cuisine = props.cuisine;
    let diet = props.diet;
    const url = "api/v1/recipes/" + cuisine + "/" + diet;

    const axiosHeader = {
        headers: {
            'Content-type' : 'application/json',
            'Authorization' : "Bearer " + localStorage.getItem("token")
        }
    };

    useEffect(() => {
        axios.get(url, axiosHeader)
            .then(response => {
                // console.log(response.data.results);
                setRecipeData({recipeData: response.data.results});
            })
        .catch(error => console.log(error))
    }, [props, url])

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
            {state.recipeData.map((recipee) => (<Recipe key={recipee.id} recipee={recipee}/>))}

        </div>
    )
}

export default RecipeFetch