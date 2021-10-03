import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./FlightTransport.scss"
import "@immfly/flights-map";
import FlightMap from "./FlightMap";
// import { FlightLandSharp } from '@material-ui/icons';


/* require('dotenv').config();
const apiKey = process.env.REACT_APP_API_KEY_CLOVERLY;
const AuthStr = "Bearer " + apiKey; */
const axiosHeader = {
    headers: {
        'Content-type' : 'application/json',
    }
};


// const apiURL = 'https://api.cloverly.com/2019-03-beta/estimates/flight';
const airportsURL = "api/v1/airports";
const apiURL = "api/v1/flight-transport";

const flightsTemplate = [
    {
      name: 'first',
      origin: { city: 'Zadoi', latitude: 32.74647437694143, longitude: 94.81066352656649 },
      destination: { city: 'Toronto', latitude: 43.8163, longitude: -79.4287 },
      state: 1,
      color: '#F60000'
    },
    {
      name: 'second',
      origin: { city: 'N39', latitude: -7.138793513804092, longitude: 22.37131768752556 },
      destination: { city: 'Zadoi', latitude: 32.74647437694143, longitude: 94.81066352656649 },
      state: 1,
      hideGlowingEffect: true,
      color: '#fff'
    },
  ]





const FlightTransport = props => {

    let [distanceFlew, setDistanceFlew] = useState(0);
    let [co2InKg , setCo2InKg] = useState(0);
    let [airports,setAirports] = useState([]);
    let [visitedAirports, setVisitedAirports] = useState([]);
    let [myflights, setMyFlights] = useState([]);

    useEffect(()=>{
        axios.post(airportsURL,"", axiosHeader)
        .then(response => {
            setAirports(response.data)
        })
    }, [ airportsURL ])

    useEffect(() => {
        let body = {
            "airports":[
                visitedAirports[0],
                visitedAirports[1],
                visitedAirports[2]
            ]};
        axios.post(apiURL, body, axiosHeader )
        .then(resp => {
            setDistanceFlew(resp.data.distance_in_miles * 1.6)
            setCo2InKg(resp.data.equivalent_carbon_in_kg)
        })
        .catch(err => {
            console.log(err);
        });
    }, [ visitedAirports ])


    const handleSubmit = (event) => {
        let airportFrom = event.target.parentNode.children[1].value.toLowerCase();
        let airportThrough = event.target.parentNode.children[3].value.toLowerCase();
        let airportTo = event.target.parentNode.children[5].value.toLowerCase();
        setAirports([ airportFrom, airportThrough, airportTo]);

        setMyFlights(flightsTemplate);
      };



    return (
        <div>
            <div className="flight-transport-container">
                <fieldset className="flight-transport-fieldset">
                    <legend >Flight transport co2 calculator</legend>
                    <form className="flight-transport-form">
                        <label for="airportsFrom">Airport from:</label>
                        <select name="airportsFrom" id="airportsFrom">
                            { airports.map((airport) => 
                                <option value={ airport.iata_code } lat={ airport.latitude_deg } lon={ airport.longitude_deg }> { airport.name } </option>
                            )}
                        </select>

                        <label for="airportsThrough">Airport through:</label>
                        <select name="airportsThrough" id="airportsThrough">
                            { airports.map((airport) => 
                                <option value={ airport.iata_code }> { airport.name } </option>
                            )}
                        </select>

                        <label for="airportsTo">Airport to:</label>
                        <select name="airportsTo" id="airportsTo">
                            { airports.map((airport) => 
                                <option value={ airport.iata_code }> { airport.name } </option>
                            )}
                        </select>
                        <button type="button" onClick={ handleSubmit }>Calculate</button>
                    </form>
                    <p>You flew { distanceFlew } km-s.</p>
                    <p id="finalCO2">Your carbon consumption with this travel was { co2InKg } kg-s.</p>
                    <div className="flight-map-container">
                        <FlightMap myFlights={ myflights }/>
                    </div>
                </fieldset>
            </div>
  
        </div>
    )
}

export default FlightTransport;

