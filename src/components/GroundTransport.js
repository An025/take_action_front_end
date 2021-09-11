import React, { useEffect, useState } from 'react';
import ToggleSwitch from './ui/ToggleSwitch';
import axios from 'axios';


require('dotenv').config();
const apiKey = process.env.REACT_APP_API_KEY_CLOVERLY;
const AuthStr = "Bearer " + apiKey;


const URL = 'https://api.cloverly.com/2019-03-beta/estimates/vehicle';
const kml2mpgMultiplier = 2.35214583;



const axiosHeader = {
    headers: {
        'Content-type' : 'application/json',
        "Authorization" : AuthStr
    }
};

const GroundTransport = props => {

    let [distanceTravelled, setDistanceTravelled] = useState(0);
    let [co2InKg , setCo2InKg] = useState(0);
    let [fuelEfficiency, setFuelEfficiency] = useState(10);
    let [chosenFuel, setChosenFuel] = useState('gasoline');

    useEffect(() => {
        let body = {
            "distance":{
                "value" : distanceTravelled,
                "units" : "km"},
            "fuel_efficiency":{
                "value": fuelEfficiency * kml2mpgMultiplier,
                "units":"mpg",
                "of": (chosenFuel ? chosenFuel : "gasoline" )
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
        <div className="ground-transport-form">
            <fieldset>
                <legend >Ground transportation</legend>
                <form id="ground-transport-form">
                    <label htmlFor="distance">Distance (km): </label>
                    <input placeholder="Distance in km..." name="distance"></input><br />
                    
                    <label htmlFor="distance">Efficiency (kml): </label>
                    <input name="efficiency" placeholder="Average: 10 km/l"></input><br />

                    <ToggleSwitch fuel={ chosenFuel } setFuel={ setChosenFuel }/><br />

                    <button type="button" onClick={ handleSubmit }>Calculate</button>
                </form>

                <p>Your carbon consumption with this travel:</p>
                <p> { (co2InKg ? co2InKg : 0 ) + " kg" } </p>
            </fieldset>
        </div>
    )
}

export default GroundTransport;