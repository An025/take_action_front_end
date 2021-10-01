import React, {useState, useEffect} from "react";
import ReactMapGl, {Marker, Popup} from 'react-map-gl'
import './EV.css';
import axios from 'axios';
import FavoriteBorderIcon from '@material-ui/icons//FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

export default function EV(){
  const [latitude, setLatitude] = useState(47.497913);
  const [longitude, setLongitude] = useState(19.040236);
  // const [latitude, setLatitude] = useState(51.509865);
  // const [longitude, setLongitude] = useState(-0.118092);
  const [viewport, setViewport] = useState({
    latitude: latitude,
    longitude: longitude,
    width: '100vw',
    height: '89vh',
    zoom: 14,
    scrollZoom:true,
  });

  const [favorite, setFavorite] = useState()
  const toggleHeart = () => {
    // console.log(favorite)
    setFavorite(!favorite)
    // .then(()=>{console.log(favorite)})
   

  }
  const [ev, setEV] = useState([]);
  const [selectedStation, setSelectedStation] = useState(null);
  const axiosHeader = {
    headers: {
        'Content-type' : 'application/json',
      }
  };


  useEffect(()=>{
    axios.get("api/v1/ev", {headers: {
      'Content-type' : 'application/json'}
    } )
    .then(resp => {
        setEV(resp.data);
        
    })
    .catch(err => {
        console.log(err);
    });
  }, [favorite])
// }, [favorite, latitude, longitude])

  // useEffect(()=>{
  //   axios.post("api/v1/ev/coordinate",
  //   {headers: {
  //     'Content-type' : 'application/json'}
  //   }, { params: {
  //     longitude,
  //     latitude
  //   }})
  //   .then(resp => {
  //       console.log(resp.status);
        
  //   })
  //   .catch(err => {
  //       console.log(err);
  //   });
  // }, [latitude, longitude])
  
 
   
    const postChangeFavorite =() => {
      let body = {

          "evId" : selectedStation.evId,
          "favorite" : favorite
      };

      axios.post("api/v1/ev", body, axiosHeader )
      .then(resp => {
          console.log(resp.data);
      })
      .catch(err => {
          console.log(err);
      });
    
    }

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
      onViewportChange={(viewport) =>{
        setViewport(viewport);
        setLatitude(viewport.latitude);
        setLongitude(viewport.longitude);
      }}>
           {ev.map((station)=>(
          <Marker
            key={station.evId + station.latitude}
            latitude={station.latitude}
            longitude={station.longitude}
            
          >
            <button className="markerBtn" onClick={(e) =>{
            e.preventDefault();
            setSelectedStation(station);
            setFavorite(station.favorite)
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
            <p onClick={()=>{
              toggleHeart();
              postChangeFavorite(); 
              }} 
              className="favorite"> 
              {favorite?  <FavoriteIcon/>: <FavoriteBorderIcon/>}
            </p>
          </div>
        </Popup>
      ) : null }
    </ReactMapGl>
  </div>
  )
}
