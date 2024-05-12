import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'



//Pages
import Homepage from './pages/Homepage'
import Navbar from './components/Navbar';
import ListenDrawer from './components/ListenDrawer';
function App() {


  return (
    <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Homepage />} />
      {/* Add more routes as needed */}
    </Routes>
  </Router>
  )
}

export default App
