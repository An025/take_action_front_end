import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import RecipeeFetch from './RecipeeFetch';


export default function CheckboxLabels() {
  const [state, setState] = React.useState({
    filters: {
      diet: {vegan: true,
            vegetarian: true},
      cuisine: {}
          }
    
  });

  const handleChange = (event) => {
    // console.log(state.vegan);
    console.log("asdgasg");
    let stateCopy = JSON.parse(JSON.stringify(state.filters))
    // let field = event.target.name;
    stateCopy.diet.console.log(stateCopy);
    // setState({ ...state, [event.target.name]: event.target.checked });
    setState({ ...state, filters: stateCopy });
  };

  return (
    <div>
    <h4>Select diet:</h4>
    <FormGroup row>
      <FormControlLabel
        control={<Checkbox checked={state.vegan} onChange={handleChange} name="vegan" color="primary" />}
        label="Vegan"
      />

      <FormControlLabel
        control={<Checkbox checked={state.vegetarian} onChange={handleChange} name="vegetarian" color="primary" />}
        label="Vegetarian"
      />
    </FormGroup>
    {console.log(state.filters)}
    <RecipeeFetch vegan={state.filters}/>
    </div>
  );
}