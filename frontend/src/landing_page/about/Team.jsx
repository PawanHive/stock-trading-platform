import React from 'react';
import { Link } from 'react-router-dom';

function Team() {
  return (
      <div className="container p-5">
        <div className="row text-muted lh-lg">
          <h2 className=' fs-2 text-center'>
            People
          </h2>
          <div className="col-5 py-5 px-3 text-center">
            <img src="media/images/nithinKamath.jpg" alt="Nithin Kamath" className='rounded-circle w-75' />
            <h5 className='mt-3'>Nithin Kamath</h5>
            <h6>Founder, CEO</h6>
          </div>
          <div className="col-7 py-5 px-3">
            <p>
              Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
            </p>
            <p>
              He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
            </p>
            <p>
              Playing basketball is his zen.
            </p>
            <p>
              Connect on <Link className='text-decoration-none' to="/">Homepage</Link> / <a href="" className='text-decoration-none'>TradingQnA</a> / <a href="" className='text-decoration-none'>Twitter</a>
            </p>
          </div>
        </div>
      </div>
  );
}

export default Team;