import './App.css';
import NavBar from './components/ui/NavBar';
import Main from './components/ui/Main';
import CarbonEstimates from './components/CarbonEstimates';
import Recipes from './components/Recipes';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Main/>
      {/* <CarbonEstimates/> */}
      <Recipes />
    </div>
  );
}

export default App;
