import React, {useState, useEffect} from "react";
import ReactMapGl, {Marker, Popup} from 'react-map-gl'
import './EV.css';

export default function EV(){
  const [viewport, setViewport] = useState({
    // latitude: 51.545581,
    // longitude: -0.077301,
    latitude: 47.497913,
    longitude: 19.040236,
    width: '100vw',
    height: '89vh',
    zoom: 10,
    scrollZoom:true,
  });

  const [EV, setEV] = useState([]);
  const [selectedStation, setSelectedStation] = useState(null);
  const api_key = "REACT_APP_OPENCHARGERMAP";
  useEffect(()=>{

  
    fetch('api/v1/ev', {
      mode: 'no-cors',
      method: 'get',
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
        // mode: 'cors', 
        // headers: {
        //     'x-api-key': api_key,
        //     'User-Agent' : 'My-App',
        //     'Accept': '*/*',
        // },
        })
        .then(response => response.json())
        // .then(data=> console.log(data))
        .then(data => setEV(data))
        .catch(error => console.log('Error while fetching:', error))
    
    }, [])

  useEffect(() => {
    // if pressed escape close the popup window
    const listener= (e) =>{
        if(e.key==="Escape"){
          setSelectedStation(null);
        }
      };
      window.addEventListener("keydown", listener);
      return() =>{
        window.removeEventListener("keydown", listener);
      };
    }, []);

  
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
            <button className="markerBtn" onClick={(e) =>{
            e.preventDefault();
            setSelectedStation(station);
          }}>
            
            <img src="/charger.svg" alt="charger"/>
            </button>
          </Marker>
        ))}
           {selectedStation ?(
        <Popup
        latitude={selectedStation.AddressInfo.Latitude}
        longitude={selectedStation.AddressInfo.Longitude}
        onClose={()=>{
          setSelectedStation(null);
        }}>
        
          <div className="popup">
            <h2>{selectedStation.AddressInfo.Title}</h2>
            <p>{selectedStation.AddressInfo.Town}</p>
            <p>{selectedStation.AddressInfo.Connections}</p>
          </div>
        </Popup>
      ) : null }
    </ReactMapGl>
  </div>
  )
}

