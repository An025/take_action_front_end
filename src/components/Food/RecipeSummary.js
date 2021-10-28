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


    return(
        <div>
            Hi there!
        </div>
    )
}

export default RecipeSummary