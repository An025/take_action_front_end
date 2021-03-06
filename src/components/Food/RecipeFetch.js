import axios from "axios";
import React, { useState, useEffect } from "react";
import Recipe from "./Recipe";

const RecipeFetch = props => {

    const [state, setRecipeData] = useState({
        recipeData: []
    })

    useEffect(() => {
        
        let cuisine = props.cuisine;
        let diet = props.diet;

        const url = "api/v1/recipes/" + cuisine + "/" + diet;

        const axiosHeader = {
            headers: {
                'Content-type' : 'application/json',
                'Authorization' : "Bearer " + localStorage.getItem("token")
            }
        };

        axios.get(url, axiosHeader)
            .then(response => {
                // console.log(response.data.results);
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
            {state.recipeData.map((recipee) => (<Recipe key={recipee.id} recipee={recipee}/>))}
        </div>
    )
}

export default RecipeFetch