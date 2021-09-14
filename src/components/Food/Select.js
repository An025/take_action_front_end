import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import RecipeeFetch from './RecipeeFetch';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect() {
  const classes = useStyles();
  const [diet, setDiet] = React.useState('vegetarian');
  const [cuisine, setCuisine] = React.useState('mediterranean');

  const handleDietChange = (event) => {
    setDiet(event.target.value);
  };

  const handleCuisineChange = (event) => {
    setCuisine(event.target.value);
  };

  return (
    <div>
        {console.log(diet)}
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Diet</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={diet}
          onChange={handleDietChange}
        >
          <MenuItem value={"vegetarian"}>Vegetarian</MenuItem>
          <MenuItem value={"lacto-vegetarian"}>Lacto-Vegetarian</MenuItem>
          <MenuItem value={"ovo-vegetarian"}>Ovo-Vegetarian</MenuItem>
          <MenuItem value={"vegan"}>Vegan</MenuItem>
          <MenuItem value={"pescetarian"}>Pescetarian</MenuItem>
          <MenuItem value={"paleo"}>Paleo</MenuItem>
          <MenuItem value={"primal"}>Primal</MenuItem>
        </Select>
      </FormControl>

      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Cuisine</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={cuisine}
          onChange={handleCuisineChange}
        >
          <MenuItem value={"chinese"}>Chinese</MenuItem>
          <MenuItem value={"french"}>French</MenuItem>
          <MenuItem value={"greek"}>Greek</MenuItem>
          <MenuItem value={"indian"}>Indian</MenuItem>
          <MenuItem value={"italian"}>Italian</MenuItem>
          <MenuItem value={"japanese"}>Japanese</MenuItem>
          <MenuItem value={"korean"}>Korean</MenuItem>
          <MenuItem value={"mediterranean"}>Mediterranean</MenuItem>
          <MenuItem value={"mexican"}>Mexican</MenuItem>
          <MenuItem value={"middle eastern"}>Middle Eastern</MenuItem>
          <MenuItem value={"nordic"}>Nordic</MenuItem>
          <MenuItem value={"thai"}>Thai</MenuItem>
          <MenuItem value={"vietnamese"}>Vietnamese</MenuItem>

        </Select>
      </FormControl>


      {/* <FormControl required className={classes.formControl}>
        <InputLabel id="demo-simple-select-required-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
          value={age}
          onChange={handleChange}
          className={classes.selectEmpty}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Required</FormHelperText>
      </FormControl> */}
        <RecipeeFetch diet={diet} cuisine={cuisine}/>
    </div>
  );
}
