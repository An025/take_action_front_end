import React, { useEffect, useState } from 'react';
import ToggleSwitch from '../ui/elements/ToggleSwitch';
import axios from 'axios';
import "./GroundTransport.scss"
import Accordion from "../ui/elements/Accordion";
import StaticStepper from '../ui/elements/StaticStepper';


const axiosHeader = {
    headers: {
        'Content-type' : 'application/json',
    }
};

const kml2mpgMultiplier = 2.35214583;




const GroundTransport = props => {

    let [distanceTravelled, setDistanceTravelled] = useState(0);
    let [co2InKg , setCo2InKg] = useState(null);
    let [fuelEfficiency, setFuelEfficiency] = useState(10);
    let [chosenFuel, setChosenFuel] = useState('diesel');
    const [dateOfTravel, setDateOfTravel] = useState("2019-01-01");

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

        axios.post("api/v1/ground-transport", body, axiosHeader )
        .then(resp => {
            setCo2InKg(resp.data);
        })
        .catch(err => {
            console.log(err);
        });
    }, [ distanceTravelled, fuelEfficiency, chosenFuel ])


    const handleSubmit = (event) => {
        let distance = event.target.parentNode.children[1].value;
        setDistanceTravelled(distance);

        let fuel_efficiency = event.target.parentNode.children[4].value;
    }

    const setDate = (event) => {
        let dateOfTravel = event.target.value;
        setDateOfTravel(dateOfTravel);
    }


    const saveToDB = (event) => {

        let body = {
            "dateOfTravel" : dateOfTravel,
            "distance":{
                "value" : distanceTravelled,
                "units" : "km"},
            "fuel_efficiency":{
                "value": fuelEfficiency * kml2mpgMultiplier,
                "units":"mpg",
                "of": (chosenFuel ? chosenFuel : "diesel" )
            }
        };

        axios.post("api/v1/ground-transport/persist", body, axiosHeader )
        .then(resp => {
            console.log(resp.data);
        })
        .catch(err => {
            console.log(err);
        });
    }

    const handleChange = (event) => {
        let distance = event.target.parentNode.children[2].value;
        setDistanceTravelled(distance);
        let fuel_efficiency = event.target.parentNode.children[5].value;
        fuel_efficiency = fuel_efficiency === "" ? 10 : fuel_efficiency;
        setFuelEfficiency(fuel_efficiency);
      };


    return (
        <div>
        
            <div className="ground-transport-container">
                <fieldset className="ground-transport-fieldset">
                    <legend>Ground Transport CO2 Calculator</legend>
                    <form className="ground-transport-form">
                        
                        <label htmlFor="distance">Distance (km): </label>
                        <input type="text" placeholder="Distance in km..." name="distance"></input><br />
                        <label htmlFor="distance">Efficiency (kml): </label>
                        <input type="text" name="efficiency" placeholder="Average: 10 km/l"></input><br />
                        <label htmlFor="travelDate">Date of travel:</label>
                        <input type="date" id="travelDate" name="travelDate"
                            value= { dateOfTravel }
                            min="2015-01-01" max="2022-12-31" onChange= { setDate }></input>
                        <ToggleSwitch id="fuel-toggle" name="fuel-toggle" checked={ chosenFuel } onChange={ setChosenFuel } optionLabels={ ['gasoline', 'diesel'] }/><br />
                        <button type="button" onClick={ handleSubmit }>Calculate</button>
                    </form>
                    <p>Your carbon consumption with this travel:</p>
                    <p id="finalCO2"> { (co2InKg ? co2InKg : 0 ) + " kg" } </p>
                    <button type="button" onClick= { saveToDB } >Save to database</button>
                </fieldset>
            </div>

            <div id="ground-transport-title">
                <StaticStepper 
                    state1="Calculate your footprint!" 
                    state2="Learn your options!" 
                    state3="Travel better!"
                />
            </div>

            <div className="accordion-holder">
                <Accordion 
                    panel1Heading="Fly less!"
                    panel2Heading="Drive more consciously!" 
                    panel3Heading="Use public transport!"
                    panel1Text="Think about this way: one post of you from a gorgeous vacation place is as crucial as breathing?  
                    Taking one fewer long round-trip flight could shrink your personal carbon footprint significantly.
                    If you can’t avoid flying, one way of making up for the emissions caused is to offset them by 
                    donating money to sustainable projects, such as projects which help farmers in India sell crop waste 
                    as biomass. Sometimes airlines will give you this option themselves, or you can use a third-party 
                    like Atmosfair or Terrapass."
                    panel2Text= {
                        <ul>
                            <li>Go easy on the gas and brakes — driving efficiently can help to reduce emissions. Drive “like you have an egg under your foot,” recommends Brian West, an expert in fuel and engine.</li>
                            <li>Regularly service your car to keep it more efficient.</li>
                            <li>Check your tires. Keeping tires pumped correctly can reduce emissions.</li>
                            <li>Air conditioning and intensive city driving can make emissions creep up. Cut down on these as often as possible. </li>
                            <li>Use cruise control on long drives.</li>
                            <li>Don’t weigh your car down with extra things that you don’t need on your trip.  </li>
                            <li>Carpool — this way, you’re splitting emissions between the number of people in the car.</li>
                        </ul>
                    }
                    panel3Text="Not only you spare money on fuel but you decrease your footprint significantly."
                />
            </div>


        </div>
    )
}

export default GroundTransport;