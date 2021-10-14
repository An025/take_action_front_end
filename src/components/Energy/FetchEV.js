import React, {useEffect, useState, useContext} from 'react';
import axios from 'axios';
import EvContext from './context/EvContext';
import  {Marker} from 'react-map-gl'
import PopUpBox from './PopUpBox';


const FetchEv = props =>{
  const [ev, setEV] = useState([]);
  const {setSelectedStation} = useContext(EvContext);
  const {favorite, setFavorite} = useContext(EvContext);
  // const [selectedStation, setSelectedStation] = useState(null);
  // const [favorite, setFavorite] = useState()

    const axiosHeader = {
      headers: {
          'Content-type' : 'application/json',
          'Authorization' : "Bearer " + localStorage.getItem("token")
  
        }
    };
  
    useEffect(()=>{
      axios.get("api/v1/ev", axiosHeader)
      .then(resp => {
          setEV(resp.data);          
      })
      .catch(err => {
          console.log(err);
      });
    }, [favorite])

    console.log(ev)
    return(<div>
           {(ev!==undefined)?
           ev.map((station)=>(
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
            <img src="/ev.jpg" alt="charger"/>
            </button>
          </Marker>
        ))
        : <></>}
        <PopUpBox/>

    </div>)

}

export default FetchEv;