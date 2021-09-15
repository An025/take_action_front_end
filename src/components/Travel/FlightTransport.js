import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./FlightTransport.scss"
import "@immfly/flights-map";
import FlightMap from "./FlightMap";
// import { FlightLandSharp } from '@material-ui/icons';
import Airports from "../ourResources/airports.json"


require('dotenv').config();
const apiKey = process.env.REACT_APP_API_KEY_CLOVERLY;
const AuthStr = "Bearer " + apiKey;
const axiosHeader = {
    headers: {
        'Content-type' : 'application/json',
        "Authorization" : AuthStr
    }
};


const apiURL = 'https://api.cloverly.com/2019-03-beta/estimates/flight';
/* const listOfBiggestAirports = [
    '','CAN','ATL','CTU','DFW','SZX','CKG','PEK','DEN','KMG','SHA','XIY','HND','ORD','PVG','LAX',
    'DEL','HGH','CLT','DXB','IST','CDG','LHR','MEX','PHX','SGN','MCO','CGO','CJU','AMS','GRU',
    'SEA','NKG','SVO','CSX','FRA','MIA','IAH','GMP','MAD','SAW','XMN','BKK','JFK','KWE','HAK',
    'FLL','SFO','DME','PKX','EWR',
]; */

const const_flights = [
    {
      name: 'V131',
      origin: { city: 'Zadoi', latitude: 32.74647437694143, longitude: 94.81066352656649 },
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
    const [myflights, setMyFlights] = useState([]);

    useEffect(()=>{
        
    }, URL)

    useEffect(() => {
        let body = {
            "airports":[
                airports[0],
                airports[1],
                airports[2]
            ]};
        console.log(body)
        axios.post(apiURL, body, axiosHeader )
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

        setMyFlights(const_flights);
      };



    return (
        <div>
            <div className="flight-transport-container">
                <fieldset className="flight-transport-fieldset">
                    <legend >Flight transport co2 calculator</legend>
                    <form className="flight-transport-form">
                        <label for="airportsFrom">Airport from:</label>
                        <select name="airportsFrom" id="airportsFrom">
                            { Airports.map((airport) => 
                                <option value={ airport.iata_code } lat={ airport.latitude_deg } lon={ airport.longitude_deg }> { airport.name } </option>
                            )}
                        </select>

                        <label for="airportsThrough">Airport through:</label>
                        <select name="airportsThrough" id="airportsThrough">
                            { Airports.map((airport) => 
                                <option value={ airport.iata_code }> { airport.name } </option>
                            )}
                        </select>

                        <label for="airportsTo">Airport to:</label>
                        <select name="airportsTo" id="airportsTo">
                            { Airports.map((airport) => 
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

