import React, {useState, useEffect} from "react";
import ReactMapGl, {Marker, Popup} from 'react-map-gl'
import './EV.css';

export default function EV(){
  const [viewport, setViewport] = useState({
    latitude: 51.545581,
    longitude: -0.077301,
    // latitude: 47.497913,
    // longitude: 19.040236,
    width: '100vw',
    height: '89vh',
    zoom: 10,
    scrollZoom:true,
  });


  
  return (<div>
    <ReactMapGl {...viewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      mapStyle="mapbox://styles/enviroso/cktd9xlyz00t417pdy461b3mx"
      onViewportChange={viewport =>{
        setViewport(viewport);
      }}>
    </ReactMapGl>
  </div>
  )
}

