import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Navbar from './components/Navbar';

const  App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route exact path="/" element={ <h1>iam an component</h1>}>
         
        </Route>
        <Route exact path="/add" element={ <h1>I am Add Component</h1>}>
           
        </Route>
        <Route  path="/edit/:id">
           Edit Component
        </Route>
      </Routes>
    </div>
  );
}

export default App;
