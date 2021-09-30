import React, {useState, useEffect} from "react";
import ReactMapGl, {Marker, Popup} from 'react-map-gl'
import './EV.css';
import axios from 'axios';
import FavoriteBorderIcon from '@material-ui/icons//FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

export default function EV(){
  const [viewport, setViewport] = useState({
    // latitude: 51.545581,
    // longitude: -0.077301,
    latitude: 47.497913,
    longitude: 19.040236,
    width: '100vw',
    height: '89vh',
    zoom: 13,
    scrollZoom:true,
  });

  const [favorite, setFavorite] = useState()
  const toggleHeart = () => setFavorite(!favorite)
  const [EV, setEV] = useState([]);
  const [selectedStation, setSelectedStation] = useState(null);
  const axiosHeader = {
    headers: {
        'Content-type' : 'application/json',
      }
  };
  useEffect(()=>{
    axios.get("api/v1/ev", axiosHeader )
    .then(resp => {
        setEV(resp.data);
        
    })
    .catch(err => {
        console.log(err);
    });
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
            key={station.evId + station.latitude}
            latitude={station.latitude}
            longitude={station.longitude}
            favorite={station.favorite}
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
        latitude={selectedStation.latitude}
        longitude={selectedStation.longitude}
        
        onClose={()=>{
          setSelectedStation(null);
        }}>
        
          <div className="popup">
            <h2>{selectedStation.title}</h2>
            <p>{selectedStation.town}</p>
            <p>{selectedStation.address}</p>
            <p>{selectedStation.favorite}</p>
            <p onClick={toggleHeart} className="favorite"> 
            {favorite?  <FavoriteIcon/>: <FavoriteBorderIcon/>}
               </p>
          </div>
        </Popup>
      ) : null }
    </ReactMapGl>
  </div>
  )
}
