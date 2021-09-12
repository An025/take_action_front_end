import React, { useEffect, useState } from 'react';
import ToggleSwitch from './ui/elements/ToggleSwitch';
import axios from 'axios';
import "./GroundTransport.scss"
import PieChart from './ui/elements/PieChart';


require('dotenv').config();
const apiKey = process.env.REACT_APP_API_KEY_CLOVERLY;
const AuthStr = "Bearer " + apiKey;
const axiosHeader = {
    headers: {
        'Content-type' : 'application/json',
        "Authorization" : AuthStr
    }
};

const URL = 'https://api.cloverly.com/2019-03-beta/estimates/vehicle';
const kml2mpgMultiplier = 2.35214583;




const GroundTransport = props => {

    let [distanceTravelled, setDistanceTravelled] = useState(0);
    let [co2InKg , setCo2InKg] = useState(null);
    let [fuelEfficiency, setFuelEfficiency] = useState(10);
    let [chosenFuel, setChosenFuel] = useState('diesel');

    useEffect(() => {
        let body = {
            "distance":{
                "value" : distanceTravelled,
                "units" : "km"},
            "fuel_efficiency":{
                "value": fuelEfficiency * kml2mpgMultiplier,
                "units":"mpg",
                "of": (chosenFuel ? chosenFuel : "diesel" )
            }
        };

        axios.post(URL, body, axiosHeader )
        .then(resp => {
            setCo2InKg(resp.data.equivalent_carbon_in_kg);
        })
        .catch(err => {
            console.log(err);
        });
    }, [ distanceTravelled, fuelEfficiency, chosenFuel ])


    const handleSubmit = (event) => {
        let distance = event.target.parentNode.children[1].value;
        setDistanceTravelled(distance);

        let fuel_efficiency = event.target.parentNode.children[4].value;
        fuel_efficiency = fuel_efficiency === "" ? 10 : fuel_efficiency;
        setFuelEfficiency(fuel_efficiency);
      };


    return (
        <div className="ground-transport-container">
            <fieldset className="ground-transport-fieldset">
                <legend>Ground Transport</legend>
                <form className="ground-transport-form">
                    <label htmlFor="distance">Distance (km): </label>
                    <input type="text" placeholder="Distance in km..." name="distance"></input><br />
                    
                    <label htmlFor="distance">Efficiency (kml): </label>
                    <input type="text" name="efficiency" placeholder="Average: 10 km/l"></input><br />
 
                    <ToggleSwitch id="fuel-toggle" name="fuel-toggle" checked={ chosenFuel } onChange={ setChosenFuel } optionLabels={ ['gasoline', 'diesel'] }/><br />

                    <button type="button" onClick={ handleSubmit }>Calculate</button>
                </form>

                <p>Your carbon consumption with this travel:</p>
                <p id="finalCO2"> { (co2InKg ? co2InKg : 0 ) + " kg" } </p>

                <PieChart />

            </fieldset>
        </div>
    )
}

export default GroundTransport;