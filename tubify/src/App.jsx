import { BrowserRouter, Routes, Route } from 'react-router-dom';

import {Feed, Navbar, SearchFeed, VideoDetails, ChannelDetails } from './components';
import './App.css';

function App() {

  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/"  element={<Feed/>} />
          <Route path="/video/:id" element={<VideoDetails/>} />
          <Route path="/channel/:id" element={<ChannelDetails />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
