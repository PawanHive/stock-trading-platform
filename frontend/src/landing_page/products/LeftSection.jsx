import React from 'react';

function LeftSection({ imageURL, productName, productDescription, tryDemo, learnMore, coin, googlePlay, appStore, }) {
  return (
    <div className="container">
      <div className="row">

        <div className="col-7 p-5">
          <img src={imageURL} alt="" />
        </div>

        <div className="col-5 p-5 mt-5">
          <h3>{productName}</h3>
          <p className='text-muted lh-lg'>{productDescription}</p>

          {(tryDemo || learnMore || coin) && (
            <div className='fw-semibold mt-4'>
              {tryDemo && (
                <a href={tryDemo} className='me-5 text-decoration-none'>Try Demo →</a>
              )}
              {learnMore && (
                <a href={learnMore} className='ms-5 text-decoration-none'>Learn More →</a>
              )}
              {coin && (
                <a href={coin} className='me-5 text-decoration-none'>Coin →</a>
              )}
            </div>
          )}

          <div className='mt-4 d-inline-block'>
            <a href={googlePlay} className='me-5'>
              <img src="media/images/googlePlayBadge.svg" alt="" />
            </a>
            <a href={appStore}>
              <img src="media/images/appstoreBadge.svg" alt="" />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}

export default LeftSection;