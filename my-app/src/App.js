import './App.css';
import {Routes,Route} from "react-router-dom";
import Home from './components/Home';
import Reg from './components/Registration';
import Calendar from './components/ADR';
import List from './components/List';
import Evault from './components/Evault';
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Registration" element={<Reg/>}/>
      <Route path="/ADR" element={<Calendar/>}/>
      <Route path="/List" element={<List/>}/>
      <Route path="/Evault" element={<Evault/>}/>
    </Routes>
      

    </>
        
        
    
  );
}

export default App;
