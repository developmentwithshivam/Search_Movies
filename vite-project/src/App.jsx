import { useState } from 'react'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import MovieDetail from './pages/MovieDetail'
import { Routes, Route } from 'react-router-dom';

function App() {


  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Favorites" element={<Favorites/>} />
      <Route path="/MovieDetail/:id" element={<MovieDetail/>} />
    </Routes>
    </>
  )
}

export default App
