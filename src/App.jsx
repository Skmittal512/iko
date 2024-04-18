import React from 'react'
import '@fortawesome/fontawesome-free/css/all.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import HeroSection from './components/HeroSection'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <HeroSection/>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
