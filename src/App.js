import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Login from './Containers/Login';

import { Outlet, } from 'react-router-dom';


function App() {
  return (
    // <div className="App">
  
       <Login/>
    
    //  {/* </div> */}
 
  );
}

export default App;

