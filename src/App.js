import './App.css';
import NavBar from './components/ui/NavBar';
import Footer from './components/ui/Footer';
import Main from './components/ui/Main';
// import CarbonEstimates from './components/CarbonEstimates';
import FlightTransport from './components/FlightTransport';
import FoodMainPage from './components/Food/FoodMainPage';
import RecipeeDetails from './components/Food/RecipeeDetails';
import GroundTransport from './components/Travel/GroundTransport';

import SideBar from './components/ui/SideBar';
import {BrowserRouter,Switch,Route} from "react-router-dom";
import Video from './components/ui/elements/Video';
import EV from './components/Energy/EV';
import React from 'react';
import Upload from './components/ui/Upload';


function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Switch>

        <Route exact path="/video">
          <div className="cont">
             <SideBar/>
             <Video/>
          </div>
        </Route>

        <Route exact path="/food">
          <div className="cont">
            <SideBar />
            <FoodMainPage/>
          </div>
        </Route>

        <Route exact path="/food/recipee-details">
          <div className="cont">
            <SideBar/>
            <RecipeeDetails/>
          </div>
          
        </Route>

        <Route exact path="/vehicle">
          <div className="cont">
            <SideBar />
            <GroundTransport />
          </div>
        </Route>
        
        <Route exact path="/EV">
          <div className="cont">
            <SideBar/>
            <EV/>
          </div>
        </Route>

        <Route exact path="/flight">
          <div className="cont">
            <SideBar/>
            <FlightTransport />
          </div>
        </Route>


        <Route exact path="/about">
          <div className="cont">
            <SideBar/>
            <Upload/>
          </div>
        </Route>

        <Route exact path="/">
          <Main />
        </Route>

      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
