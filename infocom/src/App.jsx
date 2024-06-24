
import React from 'react'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Service from './components/Services/Service';
import Cat from './components/categories/categorie'
import About from './components/About/About';
import Foter from './components/Footer/Footer';


function App() {
  return (
    <div className='scroll-smooth'>
      <Navbar/>
      <Hero/>
      <Service/>
      <About/>
      <Cat/>
      <Foter/>
    </div>
  )
}

export default App


