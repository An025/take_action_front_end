import './App.css';
import NavBar from './components/ui/NavBar';
import Footer from './components/ui/Footer';
import Main from './components/ui/Main';
// import CarbonEstimates from './components/CarbonEstimates';
import FlightTransport from './components/Travel/FlightTransport';
import FoodMainPage from './components/Food/FoodMainPage';
import RecipeeDetails from './components/Food/RecipeeDetails';
import GroundTransport from './components/Travel/GroundTransport';
import {BrowserRouter,Switch,Route} from "react-router-dom";
import Video from './components/ui/elements/Video';
import EV from './components/Energy/EV';
import React from 'react';
import Upload from './components/ui/Upload';
import Login from './components/ui/Login';
import Registration from './components/ui/Registration';

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Switch>

        <Route exact path="/video">
          <div className="cont">
             <Video/>
          </div>
        </Route>

        <Route exact path="/food">
          <div className="cont">
            <FoodMainPage/>
          </div>
        </Route>

        <Route exact path="/food/recipee-details">
          <div className="cont">
            <RecipeeDetails/>
          </div>
          
        </Route>

        <Route exact path="/vehicle">
          <div className="cont">
            <GroundTransport />
          </div>
        </Route>
        
        <Route exact path="/ev">
          <div className="cont">
            {/* <SideBar/> */}
            <EV/>
          </div>
        </Route>

        <Route exact path="/flight">
          <div className="cont">
            <FlightTransport />
          </div>
        </Route>


        <Route exact path="/about">
          <div className="cont">
            <Upload/>
          </div>
        </Route>

        <Route exact path="/">
          <Main />
        </Route>

        <Route path="/login">
          <Login/>
        </Route>

        <Route path="/registration">
          <Registration/>
        </Route>

      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
