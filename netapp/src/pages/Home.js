import React from 'react';
import Analytics from '../components/Analytics';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbaar from '../components/Navbaar.js';
import Newsletter from '../components/Newsletter';
import Category from '../components/Category.js';

function Home() {
  return (
    <div className='bg-black'>
      <Navbaar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Category/>
      <Footer />
    </div>
  );
}

export default Home;
