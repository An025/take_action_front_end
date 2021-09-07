import './App.css';
import NavBar from './components/ui/NavBar';
import Main from './components/ui/Main';
import CarbonEstimates from './components/CarbonEstimates';
import FlightTransport from './components/FlightTransport';

function App() {
  return (
    <div className="App">
      <NavBar/>
      {/* <Main/> */}
      {/* <CarbonEstimates/> */}
      <FlightTransport />
    </div>
  );
}

export default App;
