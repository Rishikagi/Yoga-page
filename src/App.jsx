import { useState } from 'react'
import './index.css'
import './App.css';
import ZenithYoga from './ZenithYoga';
import Hero from './Hero';
import About from './About';
import Instructor from './Instructor';
import Programs from './Programs';
import Events from './Events';
import Blogs from './Blogs';
import Schedule from './Schedule';
import Benifits from './Benifits';
import Contact from './Contact';

function App() {


  return (
    <>
    <Hero/>
    
    <About/>
    <Instructor/>
    <Programs/>
    <Events/>
    <Blogs/>
    <ZenithYoga/>
    <Schedule/>
    <Benifits/>
    <Contact/>
    </>
  )
}

export default App
