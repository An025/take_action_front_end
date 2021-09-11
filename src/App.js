import './App.css';
import NavBar from './components/ui/NavBar';
import Main from './components/ui/Main';
import CarbonEstimates from './components/CarbonEstimates';
import FoodRecipes from './components/Food/FoodRecipes';

import SideBar from './components/ui/SideBar';
import {BrowserRouter,Switch,Route,Link} from "react-router-dom";
import Content from './components/ui/Content';
import EV from './components/EV';
function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Switch>

        <Route exact path="/side">
          <div className="cont">
             <SideBar/>
             <Content/>
          </div>
        </Route>

        <Route exact path="/food">
          <FoodRecipes/>
        </Route>

        <Route exact path="/EV">
          <EV/>
        </Route>

        <Route exact path="/">
          <Main />
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
