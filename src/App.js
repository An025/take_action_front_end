import './App.css';
import NavBar from './components/ui/NavBar';
import Main from './components/ui/Main';
import CarbonEstimates from './components/CarbonEstimates';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Main/>
      <CarbonEstimates/>
    </div>
  );
}

export default App;
