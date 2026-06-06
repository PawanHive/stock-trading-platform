/*
we make this component out from home folder because it will be used by many component 
in (multiple space) in future
*/

import React from 'react';

function Footer() {
  return (
    <footer className='border-top' style={{ backgroundColor: "rgb(250, 250, 250" }}>


      <div className="container mt-5">
        <div className="row mt-5">
          <div className="col">
            <img src="media/images/logo.svg" alt="" style={{ width: "50%" }} />
            <p className='text-muted mt-4' style={{ fontSize: "12px" }} >
              &copy; 2010 - 2026, Zerodha Broking Ltd. <br /> All rights reserved.
            </p>
            <div className="row">
              <div className="col-2"><i class="fa-brands fa-x-twitter text-muted"></i></div>
              <div className="col-2"><i class="fa-brands fa-square-facebook text-muted"></i></div>
              <div className="col-2"><i class="fa-brands fa-instagram text-muted"></i></div>
              <div className="col-2 mb-3"><i class="fa-brands fa-linkedin-in text-muted"></i></div>
            </div>
            <div className="row border-top">
              <div className="col-2 mt-3"><i class="fa-brands fa-youtube text-muted"></i></div>
              <div className="col-2 mt-3"><i class="fa-brands fa-whatsapp text-muted"></i></div>
              <div className="col-2 mt-3"><i class="fa-brands fa-telegram text-muted"></i></div>
            </div>
            <div className="row mt-4 g-2">
              <div className="col">
                <img src="media/images/googlePlayBadge.svg" alt="" style={{width: "103%", filter: "invert(1)"}}/>
              </div>
              <div className="col">
                <img src="media/images/appstoreBadge.svg" alt="" style={{width: "100%", filter: "invert(1)"}} />
              </div>
            </div>
          </div>
          <div className="col">
            <p className='fs-5 fw-semibold'>Company</p>
            <a href="" class="text-muted text-decoration-none d-inline-block mb-3 small"> Open demat account</a> <br />
            <a href="" class="text-muted text-decoration-none d-inline-block mb-3 small"> Minor demat account</a> <br />
            <a href="" class="text-muted text-decoration-none d-inline-block mb-3 small"> NRI demat account</a> <br />
            <a href="" class="text-muted text-decoration-none d-inline-block mb-3 small"> HUF demat account</a> <br />
            <a href="" class="text-muted text-decoration-none d-inline-block mb-3 small"> Commodity</a> <br />
            <a href="" class="text-muted text-decoration-none d-inline-block mb-3 small"> Dematerialisation</a> <br />
            <a href="" class="text-muted text-decoration-none d-inline-block mb-3 small"> Fund transfer</a> <br />
            <a href="" class="text-muted text-decoration-none d-inline-block mb-3 small"> MTF</a> <br />
          </div>
          <div className="col">
            <p className='fs-5 fw-semibold'>Support</p>
            <a href="" class="text-muted text-decoration-none d-inline-block mb-3 small"> Contact us</a> <br />
            <a href="" class="text-muted text-decoration-none d-inline-block mb-3 small"> Support portal</a> <br />
            <a href="" class="text-muted text-decoration-none d-inline-block mb-3 small"> How to file a complaint?</a> <br />
            <a href="" class="text-muted text-decoration-none d-inline-block mb-3 small"> Status of your complaints</a> <br />
            <a href="" class="text-muted text-decoration-none d-inline-block mb-3 small"> Bulletin</a> <br />
            <a href="" class="text-muted text-decoration-none d-inline-block mb-3 small"> Circular</a> <br />
            <a href="" class="text-muted text-decoration-none d-inline-block mb-3 small"> Z-Connect blog</a> <br />
            <a href="" class="text-muted text-decoration-none d-inline-block mb-3 small"> Downloads</a> <br />
          </div>
          <div className="col">
            <p className='fs-5 fw-semibold'>Account</p>
            <a href="" class="text-muted text-decoration-none d-inline-block mb-3 small"> About</a> <br />
            <a href="" class="text-muted text-decoration-none d-inline-block mb-3 small"> Philosophy</a> <br />
            <a href="" class="text-muted text-decoration-none d-inline-block mb-3 small"> Press & media</a> <br />
            <a href="" class="text-muted text-decoration-none d-inline-block mb-3 small"> Careers</a> <br />
            <a href="" class="text-muted text-decoration-none d-inline-block mb-3 small"> Zerodha Cares (CSR)</a> <br />
            <a href="" class="text-muted text-decoration-none d-inline-block mb-3 small"> Zerodha.tech</a> <br />
            <a href="" class="text-muted text-decoration-none d-inline-block mb-3 small"> Open source</a> <br />
            <a href="" class="text-muted text-decoration-none d-inline-block mb-3 small"> Referral program</a> <br />
          </div>
          <div className="col">
            <p className='fs-5 fw-semibold'>Quick links</p>
            <a href="" class="text-muted text-decoration-none d-inline-block mb-3 small"> Upcoming IPOs</a> <br />
            <a href="" class="text-muted text-decoration-none d-inline-block mb-3 small"> Brokerage charges</a> <br />
            <a href="" class="text-muted text-decoration-none d-inline-block mb-3 small"> Market holidays</a> <br />
            <a href="" class="text-muted text-decoration-none d-inline-block mb-3 small"> Economic calendar</a> <br />
            <a href="" class="text-muted text-decoration-none d-inline-block mb-3 small"> Calculators</a> <br />
            <a href="" class="text-muted text-decoration-none d-inline-block mb-3 small"> Markets</a> <br />
            <a href="" class="text-muted text-decoration-none d-inline-block mb-3 small"> Sectors</a> <br />
            <a href="" class="text-muted text-decoration-none d-inline-block mb-3 small"> Gift Nifty</a> <br />
          </div>
        </div>
        <div className='mt-5 text-muted' style={{ fontSize: "12px" }}>
          <p>Zerodha Broking Ltd.: Member of NSE, BSE, MCX & MSEI – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to <a href="" className='text-decoration-none'>complaints@zerodha.com</a> , for DP related to <a href="" className='text-decoration-none'>dp@zerodha.com</a> . Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>

          <p>Procedure to file a complaint on <a href="" className='text-decoration-none'>SEBI SCORES</a>: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances.</p>

          <p> <a href="" className='text-decoration-none'>Smart Online Dispute Resolution</a>  | <a href="" className='text-decoration-none'>Grievances Redressal Mechanism</a> </p>

          <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>

          <p>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>

          <p>India's largest broker based on networth as per NSE. <a href="#" className="text-decoration-none">NSE broker factsheet</a></p>

          <p>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers/depository participants. Receive information of your transactions directly from Exchange/Depositories on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please <a href="#" className="text-decoration-none">create a ticket here</a>.</p>

          <p>*Customers availing insurance advisory services offered by Ditto (Tacterial Consulting Private Limited | IRDAI Registered Corporate Agent (Composite) License No CA0738) will not have access to the exchange investor grievance redressal forum, SEBI SCORES/ODR, or arbitration mechanism for such products.</p>

          <p>Fixed deposit products offered on this platform are third-party products (TPP) and are not Exchange traded products. These are offered through Blostem Fintech Private Limited. Zerodha Broking Limited (SEBI Registration No.: INZ000031633) is acting solely as a distributor for these products. Any disputes arising with respect to such distribution activity will not have access to SEBI SCORES/ODR, Exchange Investor Grievance Redressal Forum, or Arbitration mechanism. Fixed deposits are regulated by the Reserve Bank of India (RBI).</p>

        </div>

        <div>
          <ul class="list-unstyled d-flex  gap-2 mb-0 justify-content-center">
            <li><a href="" class="text-muted text-decoration-none">NSE</a></li>
            <li class="text-muted"></li>
            <li><a href="" class="text-muted text-decoration-none">BSE</a></li>
            <li class="text-muted"></li>
            <li><a href="" class="text-muted text-decoration-none">MCX</a></li>
            <li class="text-muted"></li>
            <li><a href="" class="text-muted text-decoration-none">MSEI</a></li>
            <li class="text-muted"></li>
            <li><a href="#" class="text-muted text-decoration-none">Terms & conditions</a></li>
            <li class="text-muted"></li>
            <li><a href="#" class="text-muted text-decoration-none">Policies & procedures</a></li>
            <li class="text-muted"></li>
            <li><a href="#" class="text-muted text-decoration-none">Privacy policy</a></li>
            <li class="text-muted"></li>
            <li><a href="#" class="text-muted text-decoration-none">Disclosure</a></li>
            <li class="text-muted"></li>
            <li><a href="#" class="text-muted text-decoration-none">For investor's attention</a></li>
            <li class="text-muted"></li>
            <li><a href="#" class="text-muted text-decoration-none">Investor charter</a></li>
            <li class="text-muted"></li>
            <li><a href="#" class="text-muted text-decoration-none">Sitemap</a></li>
          </ul>
        </div>
      </div>

    </footer>
  );
}

export default Footer;