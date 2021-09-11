import './App.css';
import NavBar from './components/ui/NavBar';
import Main from './components/ui/Main';
import CarbonEstimates from './components/CarbonEstimates';
import GroundTransport from './components/GroundTransport';
import SideBar from './components/ui/SideBar';
import {BrowserRouter,Switch,Route,Link} from "react-router-dom";
import Content from './components/ui/Content';


function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Switch>

        <Route exact path="/side">
          <div className="container">
             <SideBar/>
             <Content/>
          </div>
        </Route>

        <Route exact path="/food">
        </Route>

        <Route exact path="/travel">
          <SideBar/>
          <GroundTransport />
        </Route>
        
        <Route exact path="/">
          <Main />
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
