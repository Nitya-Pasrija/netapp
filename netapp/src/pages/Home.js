import React from 'react';
import Analytics from '../components/Analytics';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Category from '../components/Category.js';

function Home() {
  return (
    <div className='bg-black'>
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Category/>
      <Footer />
    </div>
  );
}

export default Home;
