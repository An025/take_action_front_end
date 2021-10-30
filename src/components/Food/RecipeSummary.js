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

    const headerStyle = {
        textAlign: 'center',
        margin: '15px'
    };

    return(
        <div>
            <h2 style={headerStyle}>You ate the following "green-meals" recently:</h2>
            <ul>
                {state.userStatistics.map((meal) => (<li key={meal.id} style={headerStyle}> {meal.name} on: {meal.consumptionDate} </li>))}
            </ul>

            <p style={headerStyle}>Calculating with an average emission value for meat-based 
                meals (21 CO2 kg) and for plant-based meals (8.4 CO2 kg), you saved the following amount of emissions:</p>
            <p style={headerStyle}>{ state.userStatistics.length * (meatEmissionValue - vegaEmissionValue) } CO2 kg</p>

        </div>
    )
}

export default RecipeSummary