import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./FlightTransport.scss"
import "@immfly/flights-map";
import FlightMap from "./FlightMap";


const axiosHeader = {
    headers: {
        'Content-type' : 'application/json',
    }
};


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

    // let [distanceFlew, setDistanceFlew] = useState(0);
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
            // setDistanceFlew(resp.data.distance_in_miles * 1.6)
            setCo2InKg(resp.data)
        })
        .catch(err => {
            console.log(err);
        });
    }, [ visitedAirports ])


    const handleChangeOfAirport = (event) => {
        let selection = event.target.selectedIndex;
        let currentAirport = event.target.options[selection].getAttribute("data-iata").toLowerCase();
        if (visitedAirports.length === 0) {
            setVisitedAirports([currentAirport]);
        } else {
            let newList = visitedAirports.concat(currentAirport);
            setVisitedAirports(newList);
        }
        setMyFlights(flightsTemplate);
      };


    return (
        <div>
            <div className="flight-transport-container">
                <fieldset className="flight-transport-fieldset">
                    <legend >Flight transport co2 calculator</legend>
                    <form className="flight-transport-form">
                        <label for="airportsFrom">Airport from:</label>
                        <select name="airportsFrom" id="airportsFrom" onChange={ handleChangeOfAirport }>
                            { airports.map((airport) => 
                                <option key={ airport.id } data-iata={ airport.iataCode } data-lat={ airport.latitude } data-lon={ airport.longitude }> { airport.name} </option>
                            )}
                        </select>

                        <label for="airportsThrough">Airport through:</label>
                        <select name="airportsThrough" id="airportsThrough" onChange={ handleChangeOfAirport }>
                            { airports.map((airport) => 
                                <option key={ airport.id } data-iata={ airport.iataCode } data-lat={ airport.latitude } data-lon={ airport.longitude }> { airport.name } </option>
                            )}
                        </select>

                        <label for="airportsTo">Airport to:</label>
                        <select name="airportsTo" id="airportsTo" onChange={ handleChangeOfAirport }>
                            { airports.map((airport) => 
                                <option key={ airport.id } data-iata={ airport.iataCode } data-lat={ airport.latitude } data-lon={ airport.longitude }> { airport.name } </option>
                            )}
                        </select>
                    </form>
                    {/* <p>You flew { distanceFlew } km-s.</p> */}
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

