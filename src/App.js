import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from './Components/NewNav';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import Resume  from './Components/Resume';
// import CV from './Components/CV';

function App() {
  return (
    <div className="App">
      <Router>
      {/* <Router basename='/smritikumari'> */}
      <Nav />
      {/* <Home /> */}
      <Routes>
        <Route index path='/' element={<Home/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/resume' element={<Resume/>}/>

      </Routes>
      </Router>
    </div>
  );
};

export default App;
