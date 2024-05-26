import './App.css';
import Aboutus from './components/Aboutus/Aboutus';
import Bricks from './components/Bricks/Bricks';
import Home from './components/Home/Home';
import { Navbarr } from './components/NavBar';


function App() {
  return (
    <div className="App">
      <Navbarr />
      <Home />
      <Aboutus />
      <Bricks />
    </div>
  );
}

export default App;
