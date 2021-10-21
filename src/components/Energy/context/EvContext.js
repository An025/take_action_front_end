import React, {useState} from 'react';
import axios from 'axios';

const EvContext = React.createContext({
  toggleHeart : () =>{},
  postChangeFavorite: () =>{},
  addOneLikedNumber: () => {},
  isHeartClicked : false,
  setHeartFalse : () => {}
});


export const EvContextProvider = (props) =>{
    const [ev, setEV] = useState([]);
    const [selectedStation, setSelectedStation] = useState(null);
    const [favorite, setFavorite] = useState()
    const toggleHeart = () => {setFavorite(!favorite)}
    
    const [isHeartClicked, setIsHeartClicked] = useState();

    const axiosHeader = {
      headers: {
          'Content-type' : 'application/json',
          'Authorization' : "Bearer " + localStorage.getItem("token")
  
        }
    };

    // Update Favorite
    const postChangeFavorite =() => {
      setIsHeartClicked(true)
      let body = {
          "evId" : selectedStation.evId,
          "favorite" : favorite,
      };

      axios.post("api/v1/ev", body, axiosHeader )
      .then(resp => {
          setEV(resp.data);
      })
      .catch(err => {
          console.log(err);
      });
    
    }

    const setHeartFalse = () =>{
      setIsHeartClicked(false)
    }



    return <EvContext.Provider
      value={
        {selectedStation, setSelectedStation, favorite, setFavorite, toggleHeart, postChangeFavorite, ev, setEV, isHeartClicked, setHeartFalse }
      
      }
      >
        {props.children}
    </EvContext.Provider>
}

export default EvContext;