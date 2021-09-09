import './App.css';
import NavBar from './components/ui/NavBar';
import Main from './components/ui/Main';
import CarbonEstimates from './components/CarbonEstimates';
import FoodRecipes from './components/FoodRecipes';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Main/>
      {/* <CarbonEstimates/> */}
      <FoodRecipes/>
    </div>
  );
}

export default App;
