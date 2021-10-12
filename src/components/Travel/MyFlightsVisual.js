import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import "./FlightTransport.scss"
import "@immfly/flights-map";
import FlightMap from "./FlightMap";

 const MyFlights = (props) => {
    
    let flightsRoute = [
        {
          name: 'first',
          origin: { city: props.myFlights[0].city, latitude: props.myFlights[0].latitude, longitude: props.myFlights[0].longitude },
          destination: {city: props.myFlights[1].city, latitude: props.myFlights[1].latitude, longitude: props.myFlights[1].longitude },
          state: 1,
          color: '#F60000'
        },
        {
          name: 'second',
          origin: { city: props.myFlights[1].city, latitude: props.myFlights[1].latitude, longitude: props.myFlights[1].longitude},
          destination: { city: props.myFlights[2].city, latitude: props.myFlights[2].latitude, longitude: props.myFlights[2].longitude },
          state: 1,
          hideGlowingEffect: true,
          color: '#fff'
        },
      ]


    return (
        <Fragment>
            <FlightMap myFlights={ flightsRoute }/>
        </Fragment>
    )
}

export default MyFlights;
