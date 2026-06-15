import React from 'react';

function Universe() {
  return (
    <div className="container">
      <div className="row text-center">
        <h2 className='mt-5'>The Zerodha Universe</h2>
        <p className='fs-6 mt-4 mb-5'>
          Extend your trading and investment experience even further with our partner platforms
        </p>

        {/* First row start from here */}
        <div className="col-4 p-3 mt-4">
          <img src="media/images/zerodhaFundhouse.png" alt="" className='mb-3' style={{ width: "50%" }} />
          <p className=' small text-muted'>
            Our asset management venture <br />
            that is creating simple and transparent index <br />
            funds to help you save for your goals. <br />

          </p>
        </div>

        <div className="col-4 p-3 mt-4">
          <img src="media/images/sensibullLogo.svg" alt="" className='mb-3' style={{ width: "75%" }} />
          <p className=' small text-muted'>
            Options trading platform that lets you <br />
            create strategies, analyze positions, and examine <br />
            data points like open interest, FII/DII, and more. <br />

          </p>
        </div>

        <div className="col-4 p-3 mt-4">
          <img src="media/images/tijori.svg" alt="" className='mb-3' style={{ width: "40%" }} />
          <p className=' small text-muted'>
            Investment research platform <br />
            that offers detailed insights on stocks, <br />
            sectors, supply chains, and more. <br />
          </p>
        </div>

        {/* Second row start from here */}
        <div className="col-4 p-3 mt-4">
          <img src="media/images/streakLogo.png" alt="" className='mb-3' style={{ width: "50%" }} />
          <p className=' small text-muted'>
            Systematic trading platform <br />
            that allows you to create and backtest <br />
            strategies without coding. <br />
          </p>
        </div>

        <div className="col-4 p-3 mt-4">
          <img src="media/images/smallcaseLogo.png" alt="" className='mb-3' />
          <p className=' small text-muted'>
            Personalized advice on life <br />
            and health insurance. No spam <br />
            and no mis-selling. <br />
          </p>
        </div>

        <div className="col-4 p-3 mt-4">
          <img src="media/images/dittoLogo.png" alt="" className='mb-3' style={{ width: "50%" }} />
          <p className=' small text-muted'>
            Personalized advice on life <br />
            and health insurance. No spam <br />
            and no mis-selling. <br />
          </p>
        </div>

        <button className='p-2 btn btn-primary fs-5 mb-5 mt-4' style={{width: "20%", margin: "0 auto"}}>Sign up for free</button>
      </div>
    </div>
  );
}

export default Universe;