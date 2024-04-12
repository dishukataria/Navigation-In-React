import './App.css';
import React from 'react';
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Dashboard from "./Pages/Dashboard";
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
function App() {
  const[isloggedin, setIsLoggedIn] = useState(false);
  return (
    <div>
     <Navbar isloggedin={isloggedin} setIsLoggedIn={setIsLoggedIn} />
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn}/>} />
      <Route path='/signup' element={<Signup setIsLoggedIn={setIsLoggedIn}/>} />
      <Route path='/dashboard' element={<Dashboard/>} />
     </Routes>

    </div>
  );
}
 
export default App;
