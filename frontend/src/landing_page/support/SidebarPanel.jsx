import React from 'react';

function SidebarPanel() {

  const quickLinks = [
    'Track account opening',
    'Track segment activation',
    'Intraday margins',
    'Kite user manual',
    'Learn how to create a ticket',
  ];

  return (
    <div>

      {/* announcements Box */}
      <div className="bg-warning-subtle mt-5 p-4" style={{borderLeft: "8px solid orange"}}>
        <ul className='mb-0'>
          <li className='mb-3 '><a href="" >Offer for sale (OFS) - June 2026</a></li>
          <li><a href="">Surveillance measure on scrips - June 2026</a></li>
        </ul>
      </div>

      {/* Quick Links Box */}
      <div className="border rounded mt-4">
        <h6 className='fw-semibold  border-bottom p-3 bg-light'>Quick links</h6>
        <ol className='ps-0 mb-0 list-unstyled'>
          {
            quickLinks.map((link, i) => (
              <li key={i} className='py-2 border-bottom px-3'>
                <a href="/" className='text-decoration-none'>{i + 1}. {link}</a>
              </li>
            ))
          }
        </ol>
      </div>

    </div>
  );
}

export default SidebarPanel;