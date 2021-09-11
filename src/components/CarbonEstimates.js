import axios from "axios";
import React, { useState, useEffect } from "react";

const Pokemons = props => {

  // destructring..
  // useState gives us an array, first element is the current state and the second is a function to update it
  // setState(?) could be called anyhow
  const [state, setState] = useState({
    pokemons: []
  })

  const AuthStr = "Bearer API_KEY"
  const ContentStr = "application/json"

  useEffect(() => {

    axios.get('https://www.carboninterface.com/api/v1/vehicle_makes',
        {
            headers: {Authorization: AuthStr}
        }
      )
      .then(function (response) {
          console.log("asd");
        console.log(response);
      })
      .catch(function (error) {
        console.log("asd2");
        console.log(error);
      })
      .then(function () {
        // always executed
      });  
    // axios.get('https://pokeapi.co/api/v2/pokemon?_limit=20')
    // .then(response => setState({ pokemons: response.data.results }))
  }, []); // Takes a second argument too: array of depedencies. state all varibles whic decide if/when useEffect runs again.
  // Without this if we change the state, useEffect runs again and again, we get into an infinite loop.



  const cardsList = {
    // zIndex: '0',
    // width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'left',
    flexWrap: 'wrap'
    
}

  return (
    <div style={cardsList}>
        {/* {state.pokemons.name} */}
        {console.log(state.pokemons)}
      Hi
    </div>
  )
  
}

export default Pokemons