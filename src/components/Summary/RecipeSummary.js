import React, { useState, useEffect } from "react";
import axios from 'axios';
import  './RecipeSummary.scss';

const RecipeSummary = props => {

    const [showTable, setShowTable] = useState(false);
    const [state, setUserStatistics] = useState({
        userStatistics: []
    })

    useEffect(() => {
        console.log("useEffect ran.")

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
        margin: '3px'
    };

    const handleTable = ()=>{
        setShowTable(!showTable);
    }

    return(
        <div className="foodsummary">

            <button className="Button" onClick={handleTable}>Green meals consumed: { state.userStatistics.length }</button>
            <table className={!showTable? "noTable" : "showTable"}>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Date</th>
                    </tr>

                </thead>
                <tbody>
                        {state.userStatistics.map((meal) => (
                        <tr>
                            <td key={meal.id}> {meal.name} </td>
                            <td key={meal.id}> {meal.consumptionDate} </td>
                        </tr>
                        ))}
                    <tr>
                        <td colspan="2">
                            <p style={headerStyle}>Calculating with an average emission value for meat-based meals (21 CO2 kg) and for plant-based meals (8.4 CO2 kg), you saved the following amount of emissions:</p>
                            <p style={headerStyle}>{ state.userStatistics.length * (meatEmissionValue - vegaEmissionValue) } CO2 kg</p>
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}

export default RecipeSummary;