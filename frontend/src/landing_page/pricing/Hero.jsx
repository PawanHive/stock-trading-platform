import React from 'react';

function Hero() {
  return (
    <div className="container">
      {/* first row */}
      <div className="row text-center mt-5">
        <h3>Charges</h3>
        <p className='fs-4 text-muted mt-1'>List of all charges and taxes</p>
      </div>

      {/* second row */}
      <div className="row text-center mt-5">

        <div className="col">
          <img src="media/images/pricingEquity.svg" alt="pricingEquity" />
          <h3>Free equity delivery</h3>
          <p className='text-muted mt-4'>
            All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.
          </p>
        </div>

        <div className="col">
          <img src="media/images/intradayTrades.svg" alt="intradayTrades" />
          <h3>Intraday and F&O trades</h3>
          <p className='text-muted mt-4'>
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.
          </p>
        </div>

        <div className="col">
          <img src="media/images/pricingEquity.svg" alt="pricingEquity" />
          <h3>Free direct MF</h3>
          <p className='text-muted mt-4'>
            All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Hero;