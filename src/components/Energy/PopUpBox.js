import React, {useContext, useEffect} from "react";
import  { Popup} from 'react-map-gl'
import './EV.css';
import FavoriteBorderIcon from '@material-ui/icons//FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import EvContext from "./context/EvContext";

const PopUpBox = props =>{
    const {selectedStation, setSelectedStation} = useContext(EvContext);
    const {favorite} = useContext(EvContext);
    const context = useContext(EvContext);



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
      }, [selectedStation, setSelectedStation]);

    return( <>
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
                context.toggleHeart();
                context.postChangeFavorite();
                }} 
                className="favorite"> 
                {favorite?  <FavoriteIcon/>: <FavoriteBorderIcon/>}
              </p>
            </div>
          </Popup>
        ) : null }
    </>
    )

}

export default PopUpBox;