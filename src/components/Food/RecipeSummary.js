import React, { useState, useEffect } from "react";
import axios from 'axios';

const RecipeSummary = props => {

    const [state, setUserStatistics] = useState({
        userStatistics: []
    })

    useEffect(() => {

        const url = "/api/v1/meal-summary";

        const axiosHeader = {
            headers: {
                'Content-type' : 'application/json',
                'Authorization' : "Bearer " + localStorage.getItem("token")
            }
        };

        axios.get(url, axiosHeader)
            .then(response => {
                console.log(response.data);
                setUserStatistics({userStatistics: response.data});
            })
        .catch(error => console.log(error))
    }, [])

    const meatEmissionValue = 21.0;
    const vegaEmissionValue = 8.4;

    return(
        <div>
            <h2>You ate the following "green-meals" recently:</h2>
            <ul>
                {state.userStatistics.map((meal) => (<li key={meal.id}> {meal.consumptionDate} </li>))}
            </ul>

            <p>Calculating with an average emission value for meat-based 
                meals (21 CO2 kg) and for plant-based meals (8.4 CO2 kg), you saved the following amount of emissions:</p>
            <p>{ state.userStatistics.length * (meatEmissionValue - vegaEmissionValue) } CO2 kg</p>

        </div>
    )
}

export default RecipeSummary