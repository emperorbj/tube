import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import './App.css';

function App() {

  return (
    <BrowserRouter>
      <Box sx={{backgroundColor:'#000'}}>
        <Navbar/>
        <Routes>
          <Route path="/" exact element={<Feed/>} />
          <Route path="/video/:id" element={<videoDetails/>} />
          <Route path="/channel/:id" element={<channelDetails />} />
          <Route path="/search/:searchTerm" element={<searchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  )
}

export default App
