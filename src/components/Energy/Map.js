import React, {useState} from "react";
import ReactMapGl from 'react-map-gl'
import './EV.css';
import FetchEv from './FetchEV';

const Map = props =>{
  const [latitude, setLatitude] = useState(47.497913);
  const [longitude, setLongitude] = useState(19.040236);
  const [viewport, setViewport] = useState({
    latitude: latitude,
    longitude: longitude,
    width: '100vw',
    height: '89vh',
    zoom: 14,
    scrollZoom:true,
  });
 
    localStorage.setItem('mapboxApiAccessToken', process.env.REACT_APP_MAPBOX_TOKEN)
  return (<div>
    <ReactMapGl {...viewport}
      mapboxApiAccessToken={localStorage.getItem('mapboxApiAccessToken')}
      mapStyle="mapbox://styles/enviroso/cktd9xlyz00t417pdy461b3mx"
      onViewportChange={(viewport) =>{
        setViewport(viewport);
        setLatitude(viewport.latitude);
        setLongitude(viewport.longitude);
      }}>
        <FetchEv/>
    </ReactMapGl>
  </div>
  )

}

export default Map;