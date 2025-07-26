import Header from './components/Header';
import Hero from './components/Hero';
import Characters from './components/Characters';
import Arena from './components/Arena';
import Footer from './components/Footer';
import Intro from './components/Intro';

import React from 'react';

const App = () => {
  return (
    <div className=''>
      <Header/>
      <Hero/>
      <Intro/>
      <Characters/>
      <Arena/>
      <Footer/>
    </div>
  )
}

export default App
