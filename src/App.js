import './App.css';

import Navbar from './components/Navbar';
import Inventory from './components/Inventory';
import Item from './components/Item';
import StateContext from './Shopcontext/stateContext';
import Additem from './components/Additem';
import Saleshistory from './components/Saleshistory';
import Graph from './components/Graph';
import Example from './components/Reciept';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  return (
    <div >

     <StateContext>
      <Router>
      <Navbar/>
        <Routes>
    <Route exact path="/" element={<><Home/></>}/>
    {/* <Route exact path="/invent" element={<Inventory/>}/> */}
  <Route exact path="/history" element={<Saleshistory/>}/>
  <Route exact path="/grap" element={<center><div style={{height:"60vh"}}><Graph/></div></center>}/>
  <Route exact path="/signup" element={<><Signup/></>}/>
    <Route exact path="/invent" element={<div><Inventory/><Item/></div>}/>
    <Route exact path="/home" element={<><Home/></>}/>
    <Route exact path="/Login" element={<><Login/></>}/>
    <Route exact path="/additem" element={<><Additem/><Inventory/></>}/>

    
    </Routes>
<Footer/>
    </Router>
    </StateContext>

    </div>
  );
}

export default App;
