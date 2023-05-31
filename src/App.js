import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from './Components/Nav';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';


function App() {
  return (
    <div className="App">
      <Router>
      <Nav>
      <h1>Hello, world!</h1>
      </Nav>
      <Routes>
        <Route index path='/' Component={Home} />
        <Route path='/about' Component={About}/>
        <Route path='/contact' Component={Contact}/>
      </Routes>
      </Router>
    </div>
  );
};

export default App;
