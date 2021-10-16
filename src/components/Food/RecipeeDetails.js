import { useLocation } from 'react-router-dom'
import axios from 'axios';

const RecipeeDetails = props => {

    // location allows to get the data from where this component was linked (API call data)
    const location = useLocation()
    const { recipeeData } = location.state

    const steps = recipeeData.recipee.analyzedInstructions[0].steps;

    const axiosHeader = {
        headers: {
            'Content-type' : 'application/json',
            'Authorization' : "Bearer " + localStorage.getItem("token")
        }
    };

    const handleClick = (event) => {

        let body = {
            'meal_id': recipeeData.recipee.id,
        };

        axios.post("/api/v1/add-meal", body, axiosHeader)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const elementStyle = {
        display: 'block',
        margin: '18px'
    };

    return(
        <div>
            {/* {console.log(location)} */}
            <h2> {recipeeData.recipee.title} </h2>
            <h5 style={elementStyle}>Preparation steps:</h5>
            { steps.map((step) => (<p style={elementStyle}> {step.number} {" - "} {step.step} </p>)) }

            <label style={elementStyle} htmlFor="meal_date">Date of consumption:</label>
            <input style={elementStyle} type="date" id="meal_date" name="meal_date" 
            value="2021-10-01" min="2021-01-01" max="2022-12-31"></input>
            {/* value should be set from state, otherwise gets rerendered all the time... */}

            <button style={elementStyle} type="button" onClick={handleClick}>Add this meal to your log</button>

            <h5 style={elementStyle} >Find more info at:</h5>
            <a style={elementStyle} href={ recipeeData.recipee.sourceUrl }> { recipeeData.recipee.sourceName } </a>
        </div>
    )
}

export default RecipeeDetails