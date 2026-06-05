/*
This page will put together (Hero and Brokerage) Component.
*/

import React from 'react';
import Navbar from '../Navbar';
import Hero from './Hero';
import LeftSection from '../products/LeftSection';
import RightSection from '../products/RightSection';
import Universe from '../products/Universe';
import Footer from '../Footer';

function PricingPage() {
  return ( 
    <>
    <h1>PricingPage</h1>
    <Navbar />
    <Hero />
    <LeftSection />
    <RightSection />
    <Universe />
    <Footer />
    </>
    
  );
}

export default PricingPage;