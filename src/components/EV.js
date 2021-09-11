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

  const [EV, setEV] = useState([]);
  const [selectedStation, setSelectedStation] = useState(null);
  useEffect(()=>{

  
  fetch('https://api.openchargemap.io/v3/poi/', {
      mode: 'cors', 
      headers: {
        'x-api-key': '1ef9e57e-d6a4-4b3a-80b5-1719b8c7b5db',
        'User-Agent' : 'My-App',
        'Accept': '*/*',
      },
    })
    .then(response => response.json())
    .then(data => setEV(data))
    .catch(error => console.log('Error while fetching:', error))
  
  }, [])
 

  
  return (<div>
    <ReactMapGl {...viewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      mapStyle="mapbox://styles/enviroso/cktd9xlyz00t417pdy461b3mx"
      onViewportChange={viewport =>{
        setViewport(viewport);
      }}>
           {EV.map((station)=>(
          <Marker
            key={station.ID + station.AddressInfo.Title}
            latitude={station.AddressInfo.Latitude}
            longitude={station.AddressInfo.Longitude}
          >
            <button className="marker-btn" onClick={(e) =>{
            e.preventDefault();
            setSelectedStation(station);
          }}>
            
            <img src="/charger.svg" alt="charger"/>
            </button>
          </Marker>
        ))}
     
    </ReactMapGl>
  </div>
  )
}

