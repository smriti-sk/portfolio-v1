import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import MySkills from './Components/MySkills.js';

function App() {
  return (
    <div className="App">
      <Router>
      <Home />
      <Routes>
        <Route path='/skills' Component={MySkills}/>
      </Routes>
      </Router>
    </div>
  );
};

export default App;
