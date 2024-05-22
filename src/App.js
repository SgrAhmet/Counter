import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Routes, Link } from "react-router-dom";  
import Home from "./components/Home";
import PrimeNumbers from "./components/PrimeNumbers";

function App() {


  return (
    <div>
      <Router> 
        
         
          
          
          
          <Routes>
            <Route path="/primeNumbers" element={<PrimeNumbers/>} />
            <Route path="/" element={<Home/>} />
          </Routes>
        
      </Router>
    </div>
  );
}

export default App;
