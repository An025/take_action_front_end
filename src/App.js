import './App.css';
import NavBar from './components/ui/NavBar';
import Main from './components/ui/Main';
import CarbonEstimates from './components/CarbonEstimates';
import GroundTransport from './components/GroundTransport';

function App() {
  return (
    <div className="App">
      <NavBar/>
      {/* <Main/> */}
      {/* <CarbonEstimates/> */}
      <GroundTransport />
    </div>
  );
}

export default App;
