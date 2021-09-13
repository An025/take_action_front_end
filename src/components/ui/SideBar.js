import React from 'react';
import {Link} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';

//icons
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import EvStationIcon from '@material-ui/icons/EvStation';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import FlightIcon from '@material-ui/icons/Flight';
import CardTravelIcon from '@material-ui/icons/CardTravel';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import { borders} from '@material-ui/system';
import { createTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';



const theme = createTheme({
    
    palette: {
        primary: blue,
        secondary: green,
    },
      
});

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 240,
    backgroundColor: '#426785',
    height: '90vh',
    paddingTop: 20,
    color: '#fff'
  },
  nested: {
    paddingLeft: theme.spacing(4),
    color: '#fff'
  },
  color: {
    color: '#fff'
  }

}));

export default function SideBar() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };



  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
    >
      {/* Food */}
      <Link to="/food" content="Food">
        <ListItem button className={classes.color}>
          <ListItemIcon>
            <FastfoodIcon className={classes.color}/>
          </ListItemIcon>
          <ListItemText primary="Food" />
        </ListItem>
      </Link>

      <Link to="/electricity">
        <ListItem button>
          <ListItemIcon>
            <EmojiObjectsIcon className={classes.color} />
          </ListItemIcon>
          <ListItemText primary="Electricity" className={classes.color}/>
        </ListItem>
      </Link>

      <Link to="/EV">
        <ListItem button>
          <ListItemIcon>
            <EvStationIcon className={classes.color}/>
          </ListItemIcon>
          <ListItemText primary="EV Station" className={classes.color}/>
        </ListItem>
      </Link>

      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <CardTravelIcon className={classes.color}/>
        </ListItemIcon>
        <ListItemText primary="Travel" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>

          <Link to="/vehicle">
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <DriveEtaIcon className={classes.color} />
              </ListItemIcon>
              <ListItemText primary="Vehicle" />
            </ListItem>
          </Link>

          <Link to="/flight">
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <FlightIcon className={classes.color}/>
            </ListItemIcon>
            <ListItemText primary="Flight" />
          </ListItem>
          </Link>

          <Link to="/shipping">
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <LocalShippingIcon className={classes.color}/>
            </ListItemIcon>
            <ListItemText primary="Shipping" />
          </ListItem>
          </Link>

        </List>
      </Collapse>
    </List>
  );
}