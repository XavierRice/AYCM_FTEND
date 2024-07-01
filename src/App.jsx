import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from 'axios';
import './App.css'

//Pages
import Homepage from './pages/Homepage'

//components
import Navbar from './components/Navbar';
import Cardflip from './components/CardFlip';
import CarouselCards from './components/CarouselCards';
import RepNav from './components/RepNav';



function App() {

  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3400';
  const podcastId = import.meta.env.VITE_PODCAST_ID;
  const [usersdDB, setUsersDB] = useState([]);
  const [charDB, setCharDB] = useState([]);
  const [episodes, setEpisodes] = useState([]);
  const [episodeDB, setEpisodeDB] = useState([]);
  // const [latestEpisode, setLatestEpisode] = useState( episodes && episodes.length > 0 ? episodes[0] : null || {} )


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

      try {
        const response = await fetch(`${backend}/spotify/podcast/${podcastId}/episodes`);
        const data = await response.json();
        setEpisodes(data.items);
      } catch (error) {
        console.error('Error fetching spotify episodes:', error);
      }

      try {
        const EpidsodeResponse = await axios.get(`${backend}/episodes`);
        setEpisodeDB(EpidsodeResponse.data);
      } catch (err) {
        console.error('Error Fetching DB episodes:', err);
      }

    }
    fetchData();
  }, [])
 

  return (
    <Router>
      <Navbar spotify={episodes}/>
      <Routes>
        <Route path="/" element={<Homepage usersdDB={usersdDB} charDb={charDB} spotify={episodes} episodeDB={episodeDB}/>} />
      </Routes>
    </Router>
  )
}

export default App
