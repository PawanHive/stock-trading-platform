import React from 'react';

function Brokerage() {
  return (
    <div className="container">
      <div className="row">

        <div className="col-8">
          <div className='mb-4'>
          <a href="" className='text-decoration-none text-center'> <h4>Brokerage calculator</h4></a>
          </div>
          <div className='text-muted'>
          <ul>
            <li>Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.</li>
            <li>Digitial contract notes will be sent via e-mail.</li>
            <li>Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.</li>
            <li>For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
            <li>For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
            <li>If the account is in debit balance, any order placed will be charged ₹40 per excecuted order instead of ₹20 per executed order.</li>
          </ul>
          </div>
        </div>

        <div className="col-4">
          <div className='mb-4'>
          <a href="" className='text-decoration-none'> <h4>List of charges</h4></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;