import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './SignUP SetUp/Login/Login'

const RoutesComp = () => {
  return (
    <>
    <Router>
    <Routes>
        <Route path='/' element={<Login />}/>
    </Routes>
    </Router>
    
    </>
  )
}

export default RoutesComp