import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';

const  App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route exact path="/" element={ <Home />} />
        <Route exact path="/add" element={ <h1>I am Add Component</h1>} />
        <Route  path="/edit/:id" />
      </Routes>
    </div>
  );
}

export default App;
