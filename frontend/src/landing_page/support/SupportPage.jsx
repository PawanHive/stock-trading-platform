/*
This component is a wrapper component for (Hero & CreateTicket) Component
*/

import React from 'react';
import Hero from './Hero';
import CreateTicket from './CreateTicket';

function SupportPage() {
  return ( 
  <>
    <Hero />
    <CreateTicket />
  </>
  );
}

export default SupportPage;