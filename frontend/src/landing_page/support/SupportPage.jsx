/*
This component is a wrapper component for (Hero & CreateTicket) Component
*/

import React from 'react';
import Hero from './Hero';
import CreateTicket from './CreateTicket';
import SearchBox from './SearchBox';
import AccordionSection from './AccordionSection';
import SidebarPanel from './SidebarPanel';

function SupportPage() {
  return ( 
  <>
    {/* hero & searchbox */}
    <div className='bg-light py-5'>
    <Hero />
    <SearchBox />
    </div>

    {/* Main Content */}
    <div className="container">
      <div className="row">

        {/* left -- Accordion wala */}
        <div className="col-8">
          <AccordionSection />
        </div>

        {/* right -- Sidebar wala */}
        <div className="col-4">
          <SidebarPanel />
        </div>

      </div>
    </div>
    {/* <CreateTicket /> */}
  </>
  );
}

export default SupportPage;