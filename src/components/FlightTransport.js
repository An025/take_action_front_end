import React, { useEffect, useState } from 'react';

const URL = 'https://api.cloverly.com/2019-03-beta/estimates/flight';

const listOfBiggestAirports = [
    '','CAN','ATL','CTU','DFW','SZX','CKG','PEK','DEN','KMG','SHA','XIY','HND','ORD','PVG','LAX',
    'DEL','HGH','CLT','DXB','IST','CDG','LHR','MEX','PHX','SGN','MCO','CGO','CJU','AMS','GRU',
    'SEA','NKG','SVO','CSX','FRA','MIA','IAH','GMP','MAD','SAW','XMN','BKK','JFK','KWE','HAK',
    'FLL','SFO','DME','PKX','EWR',
];

const options = {
    method: 'post',
    body: '',
    headers: {
        'Content-type' : 'application/json',
        "Authorization" : "Bearer public_key:47800ea0ee541b4c"
    }
};

const FlightTransport = props => {

    const [distanceFlew, setDistanceFlew] = useState(0);
    const [co2InKg , setCo2InKg] = useState(0);
    const [airports,setAirports] = useState([])

    useEffect(() => {
        let body = JSON.stringify({"airports":["sfo","atl","fra"]});
        options.body = body;

        fetch(URL, options )
        .then(response => response.json())
        .then(resp => {
            setDistanceFlew(resp.distance_in_miles * 1.6)
            setCo2InKg(resp.equivalent_carbon_in_kg)
        })
        .catch(err => {
            console.log(err);
        });
    }, [ ])


    const handleSubmit = (event) => {
/*         let airportFrom = event.target.parentNode.firstChild.value;
        setAirports(airports); */
      };

    return (
        <div className="flight-transport-form">
            <fieldset>
                <legend >Flight transportation</legend>
                <form id="flight-transport-form">
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
                    </select><br />
                    <button type="button" onClick={ handleSubmit }>Calculate</button>
                </form>
                <p>You flew { distanceFlew } km-s.</p>
                <p>Your carbon consumption with this travel was { co2InKg } kg-s.</p>
            </fieldset>
        </div>
    )
}

export default FlightTransport;

