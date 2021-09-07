import './App.css';
import NavBar from './components/ui/NavBar';
import Main from './components/ui/Main';
import CarbonEstimates from './components/CarbonEstimates';
import SidePage from './components/ui/SidePage';
import {BrowserRouter,Switch,Route,Link} from "react-router-dom";
import classes from './components/ui/SidePage.module.css';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        
        <CarbonEstimates/>
      </div>

      <Switch>
        <Route exact path="/side">
          <SidePage/>
        </Route>
        <Route exact path="/food">
          <SidePage/>
        </Route>

        <Route exact path="/">
          <Main/>
        </Route>
      </Switch>
    </BrowserRouter>
    
    
  );
}

export default App;
