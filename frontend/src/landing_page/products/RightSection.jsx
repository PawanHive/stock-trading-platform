import React from 'react';

function RightSection({ imageURL, productName, productDescription, learnMore, kiteConnect, centerContent }) {
  return (
    <div className="container">
      <div className={`row ${centerContent ? 'align-items-center' : ''}`}>

        <div className={`col-5 p-5 ${centerContent ? '' : 'mt-5'}`}>
          <h3>{productName}</h3>
          <p className='text-muted lh-lg'>{productDescription}</p>

          {(kiteConnect || learnMore) && (
            <div className='fw-semibold mt-4'>
              {kiteConnect && (
                <a href={kiteConnect} className='me-5 text-decoration-none'>Kite Connect →</a>
              )}
              {learnMore && (
                <a href={learnMore} className='me-5 text-decoration-none'>Learn More →</a>
              )}
            </div>
          )}
        </div>


        <div className="col-7 p-5">
          <img src={imageURL} alt="" />
        </div>
      </div>
    </div>
  );
}

export default RightSection;


/*

this is what we added here to make our console section align center vartically  according to its right side image, 
before it was look like shifted upward, so we used condition here which we can pass as prop from ProductsPage component 
in true or false value

in productpage we just have to make our console section true : centerContent={true}

function RightSection({centerContent }) {
  return (
    <div className="container">
      <div className={`row ${centerContent ? 'align-items-center' : ''}`}>

        <div className={`col-5 p-5 ${centerContent ? '' : 'mt-5'}`}>
        </div>

      </div>
    </div>
  );
}
*/