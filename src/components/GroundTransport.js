import axios from 'axios';
import React, { useEffect, useState } from 'react';

const URL = 'https://api.cloverly.com/2019-03-beta/estimates/vehicle';

const options = {
    method: 'post',
    body: '',
    headers: {
        'Content-type' : 'application/json',
        "Authorization" : "Bearer public_key:47800ea0ee541b4c"
    }
};

const GroundTransport = props => {

    const [distanceTravelled, setDistanceTravelled] = useState(0);
    const [co2InKg , setCo2InKg] = useState(0);

    useEffect(() => {
        let body = JSON.stringify({
            "distance":{
                "value" : distanceTravelled,
                "units" : "km"},
            "fuel_efficiency":
                {"value":23.5215,"units":"mpg","of":"gasoline"}
        });
        options.body = body;

        fetch(URL, options )
        .then(response => response.json())
        .then(resp => {
            setCo2InKg(resp.equivalent_carbon_in_kg);
        })
        .catch(err => {
            console.log(err);
        });
    }, [ distanceTravelled ])


    const handleSubmit = (event) => {
        let distance = event.target.parentNode.firstChild.value;
        setDistanceTravelled(distance); 
      };

    return (
        <div className="ground-transport-form">
            <fieldset>
                <legend >Ground transportation</legend>
                <form id="ground-transport-form">
                    <input placeholder="Give me the distance in km-s" name="distance"></input><br />
                    <input placeholder="Average consumption-not active yet(assumed 10 l/100km)"></input><br />
                    <select name="fueltypes" id="fuel-types">
                        <option value="gasoline">gasoline</option>
                        <option value="diesel">diesel</option>
                    </select><br />
                    <button type="button" onClick={ handleSubmit }>Calculate</button>
                </form>

                <p>Your carbon consumption with this travel:</p>
                <p> { co2InKg + ' kg' } </p>
            </fieldset>
        </div>
    )
}

export default GroundTransport;