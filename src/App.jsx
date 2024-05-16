import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from 'axios';
import './App.css'


//Pages
import Homepage from './pages/Homepage'
import Navbar from './components/Navbar';

//components
import Cardflip from './components/CardFlip';
import CarouselCards from './components/CarouselCards';
function App() {

  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3400';
  const [usersdDB, setUsersDB] = useState([]);
  const [charDB, setCharDB] = useState([])

  useEffect(() => {
    async function fetchData() {
      try {
        const UserResponse = await axios.get(`${backend}/users`);
        setUsersDB(UserResponse.data);
      } catch (err) {
        console.error('Error Fetching Users:', err);
      }

      try {
        const CharResponse = await axios.get(`${backend}/characters`);
        setCharDB(CharResponse.data);
      } catch (err) {
        console.error('Error Fetching Characters:', err);
      }
    }
    fetchData();
  }, [])
 

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage usersdDB={usersdDB} charDb={charDB}/>} />
      </Routes>
    </Router>
  )
}

export default App
