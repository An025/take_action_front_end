import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./FlightTransport.scss"
import "@immfly/flights-map";
import FlightMap from "./FlightMap";
import { FlightLandSharp } from '@material-ui/icons';


require('dotenv').config();
const apiKey = process.env.REACT_APP_API_KEY_CLOVERLY;
const AuthStr = "Bearer " + apiKey;
const axiosHeader = {
    headers: {
        'Content-type' : 'application/json',
        "Authorization" : AuthStr
    }
};


const URL = 'https://api.cloverly.com/2019-03-beta/estimates/flight';
const listOfBiggestAirports = [
    '','CAN','ATL','CTU','DFW','SZX','CKG','PEK','DEN','KMG','SHA','XIY','HND','ORD','PVG','LAX',
    'DEL','HGH','CLT','DXB','IST','CDG','LHR','MEX','PHX','SGN','MCO','CGO','CJU','AMS','GRU',
    'SEA','NKG','SVO','CSX','FRA','MIA','IAH','GMP','MAD','SAW','XMN','BKK','JFK','KWE','HAK',
    'FLL','SFO','DME','PKX','EWR',
];

const myFlights = [
    {
      name: 'V131',
      origin: { city: 'Paris', latitude: 48.8567, longitude: 2.3510 },
      destination: { city: 'Toronto', latitude: 43.8163, longitude: -79.4287 },
      state: 1,
      color: '#F60000'
    },
    {
      name: 'N39',
      origin: { city: 'N39', latitude: -7.138793513804092, longitude: 22.37131768752556 },
      destination: { city: 'Zadoi', latitude: 32.74647437694143, longitude: 94.81066352656649 },
      state: 1,
      hideGlowingEffect: true,
      color: '#fff'
    },
  ]





const FlightTransport = props => {

    const [distanceFlew, setDistanceFlew] = useState(0);
    const [co2InKg , setCo2InKg] = useState(0);
    const [airports,setAirports] = useState([]);
    const [flights, setFlights] = useState([]);

    useEffect(() => {
        let body = {
            "airports":[
                airports[0],
                airports[1],
                airports[2]
            ]};
        
        axios.post(URL, body, axiosHeader )
        .then(resp => {
            setDistanceFlew(resp.data.distance_in_miles * 1.6)
            setCo2InKg(resp.data.equivalent_carbon_in_kg)
        })
        .catch(err => {
            console.log(err);
        });
    }, [ airports ])


    const handleSubmit = (event) => {
        let airportFrom = event.target.parentNode.children[1].value.toLowerCase();
        let airportThrough = event.target.parentNode.children[3].value.toLowerCase();
        let airportTo = event.target.parentNode.children[5].value.toLowerCase();
        setAirports([ airportFrom, airportThrough, airportTo]);

        setFlights(myFlights);
      };



    return (
        <div>
            <div className="flight-transport-container">
                <fieldset className="flight-transport-fieldset">
                    <legend >Flight transport co2 calculator</legend>
                    <form className="flight-transport-form">
                        <label for="airportsFrom">Airport from:</label>
                        <select name="airportsFrom" id="airportsFrom">
                            { listOfBiggestAirports.map((airport) => 
                                <option value={ airport }> { airport } </option>
                            )}
                        </select>

                        <label for="airportsThrough">Airport through:</label>
                        <select name="airportsThrough" id="airportsThrough">
                            { listOfBiggestAirports.map((airport) => 
                                <option value={ airport }> { airport } </option>
                            )}
                        </select>

                        <label for="airportsTo">Airport to:</label>
                        <select name="airportsTo" id="airportsTo">
                            { listOfBiggestAirports.map((airport) => 
                                <option value={ airport }> { airport } </option>
                            )}
                        </select>
                        <button type="button" onClick={ handleSubmit }>Calculate</button>
                    </form>
                    <p>You flew { distanceFlew } km-s.</p>
                    <p id="finalCO2">Your carbon consumption with this travel was { co2InKg } kg-s.</p>
                    <div className="flight-map-container">
                        {/* <flights-map ref={(el) => { el.flights = flights }} /> */}
                        <FlightMap flights={ myFlights }/>
                    </div>
                </fieldset>
            </div>
  
        </div>
    )
}

export default FlightTransport;

