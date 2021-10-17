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
import React from 'react';
import Upload from './components/ui/Upload';
import Login from './components/ui/Login';
import Logout from './components/ui/Logout';
import Registration from './components/ui/Registration';
import ShowEV from './components/Energy/ShowEV';
import Summary from './components/Summary/Summary';

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
            <ShowEV/>
            {/* <EV/> */}
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

        <Route path="/logout">
          <Logout/>
        </Route>

        <Route path="/registration">
          <Registration/>
        </Route>

        <Route path="/summary">
          <Summary/>
        </Route>

      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
