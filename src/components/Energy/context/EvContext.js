import React, {useState} from 'react';
import axios from 'axios';

const EvContext = React.createContext({
  toggleHeart : () =>{},
  postChangeFavorite: () =>{}
});


export const EvContextProvider = (props) =>{
    const [selectedStation, setSelectedStation] = useState(null);
    const [favorite, setFavorite] = useState()
    const toggleHeart = () => {setFavorite(!favorite)}

    const axiosHeader = {
      headers: {
          'Content-type' : 'application/json',
          'Authorization' : "Bearer " + localStorage.getItem("token")
  
        }
    };

    // Update Favorite
    const postChangeFavorite =() => {
      let body = {

          "evId" : selectedStation.evId,
          "favorite" : favorite,
      };

      axios.post("api/v1/ev", body, axiosHeader )
      .then(resp => {
          console.log(resp.data);
      })
      .catch(err => {
          console.log(err);
      });
    
    }

 
  

    return <EvContext.Provider
      value={
        {selectedStation, setSelectedStation, favorite, setFavorite, toggleHeart, postChangeFavorite}
      
      }
      >
        {props.children}
    </EvContext.Provider>
}

export default EvContext;