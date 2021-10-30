import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./FlightTransport.scss"
/* import "@immfly/flights-map";
import FlightMap from "./FlightMap"; */
import MyFlightsVisual from './MyFlightsVisual';


const axiosHeader = {
    headers: {
        'Content-type' : 'application/json',
        'Authorization' : "Bearer " + localStorage.getItem("token")
    }
};

const airportsURL = "api/v1/airports";
const apiURL = "api/v1/flight-transport";


const FlightTransport = props => {

    // let [distanceFlew, setDistanceFlew] = useState(0);
    let [co2InKg , setCo2InKg] = useState(0);
    let [airports,setAirports] = useState([]);
    let [visitedAirports, setVisitedAirports] = useState([null,null,null]);
    let [myFlights, setMyFlights] = useState([
        {start: { city: 'Zadoi', latitude: 32.74647437694143, longitude: 94.81066352656649 }},
        {through: { city: 'Toronto', latitude: 43.8163, longitude: -79.4287 }},
        {landing: { city: 'N39', latitude: -7.138793513804092, longitude: 22.37131768752556 }},
    ]);
    let [dateOfTravel, setDateOfTravel] = useState("2019-01-01");

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
        let currentAirportIata = event.target.options[selection].getAttribute("data-iata").toLowerCase();
        let currentID = event.target.getAttribute("id");
        let currentCity = event.target.options[selection].getAttribute("data-city");
        let currentLat = event.target.options[selection].getAttribute("data-lat");
        let currentLong = event.target.options[selection].getAttribute("data-lon");

        let myFlightsCopy = {...myFlights}
        let newRoute = { city: currentCity, latitude: currentLat, longitude: currentLong };
        if (currentID === "from") {
            let newList = [currentAirportIata, visitedAirports[1], visitedAirports[2]];
            setVisitedAirports(newList);
            myFlightsCopy[0] = newRoute; 
        } else if (currentID === "through") {
            let newList = [visitedAirports[0], currentAirportIata, visitedAirports[2]];
            setVisitedAirports(newList);
            myFlightsCopy[1] = newRoute; 
        } else if (currentID === "to") {
            let newList = [visitedAirports[0], visitedAirports[1], currentAirportIata];
            setVisitedAirports(newList);
            myFlightsCopy[2] = newRoute; 
        }
        console.log(myFlightsCopy);
        setMyFlights(myFlightsCopy);
      };

      const setDate = (event) => {
        let dateOfTravel = event.target.value;
        setDateOfTravel(dateOfTravel);
    }


    const saveToDB = (event) => {

        let body = {
            "dateOfTravel": dateOfTravel,
            "airports":[
                visitedAirports[0],
                visitedAirports[1],
                visitedAirports[2]
            ]};

        axios.post("api/v1/flight-transport/persist", body, axiosHeader )
        .then(resp => {
            console.log(resp.data);
        })
        .catch(err => {
            console.log(err);
        });
    }


    return (
        <div>
            <div className="flight-transport-container">
                <fieldset className="flight-transport-fieldset">
                    {/* <legend >Flight transport co2 calculator</legend> */}
                    <form className="flight-transport-form">
                        <label for="airportsFrom">Airport from:</label>
                        <select name="airportsFrom" id="from" onChange={ handleChangeOfAirport }>
                            { airports.map((airport) => 
                                <option key={ airport.id } 
                                data-iata={ airport.iataCode } 
                                data-lat={ airport.latitude } 
                                data-lon={ airport.longitude }
                                data-city={ airport.municipality }> { airport.name} </option>
                            )}
                        </select>

                        <label for="airportsThrough">Airport through:</label>
                        <select name="airportsThrough" id="through" onChange={ handleChangeOfAirport }>
                            { airports.map((airport) => 
                                <option key={ airport.id } 
                                data-iata={ airport.iataCode } 
                                data-lat={ airport.latitude } 
                                data-lon={ airport.longitude }
                                data-city={ airport.municipality }> { airport.name} </option>
                            )}
                        </select>

                        <label for="airportsTo">Airport to:</label>
                        <select name="airportsTo" id="to" onChange={ handleChangeOfAirport }>
                            { airports.map((airport) => 
                               <option key={ airport.id } 
                               data-iata={ airport.iataCode } 
                               data-lat={ airport.latitude } 
                               data-lon={ airport.longitude }
                               data-city={ airport.municipality }> { airport.name} </option>
                            )}
                        </select>
                        <label htmlFor="travelDate">Date of travel:</label><br />
                        <input type="date" id="travelDate" name="travelDate"
                            value= { dateOfTravel }
                            min="2015-01-01" max="2022-12-31" onChange= { setDate }></input><br />
                        <button type="button" onClick= { saveToDB } >Save to database</button>
                    </form>

                    <div className="flight-map-container">
                        <MyFlightsVisual myFlights={ myFlights }/>
                    </div>
                    {/* <p>You flew { distanceFlew } km-s.</p> */}
                    <p id="finalCO2">Your carbon consumption with this travel was { co2InKg } kg-s.</p>
                </fieldset>
            </div>
  
        </div>
    )
}

export default FlightTransport;

