import logo from './logo.svg';
import Nave from './components/Nave';
import './App.css';
import Gridcontent from './components/Gridcontent';
import AfterGrid from './components/AfterGrid';

function App() {
  return (
    <div className="App">
      <Nave></Nave>
      
      <Gridcontent></Gridcontent>
      <AfterGrid></AfterGrid>
    </div>
  );
}

export default App;
