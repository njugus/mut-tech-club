import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home/home'
import Header  from './Header/Header'
import Events from './pages/Events/Events'
import Tracks from './pages/Tracks/Tracks'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Leadership from './pages/Leadership/Leaders'




function App() {
  

  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/'  element = {<Home/>}/>
      <Route path='/Events'  element = {<Events/>}/>
      <Route path = '/Leadership' element = {<Leadership/>}/>
      <Route path = '/Tracks' element = {<Tracks/>}/>
    </Routes>
    </BrowserRouter>
   
  
    </>

  )
}

export default App
