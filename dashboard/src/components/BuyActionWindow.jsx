import React from 'react';
import { Link } from 'react-router-dom';

import { useGeneralContext } from "./GeneralContext";

import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid, orderType }) => {
  const { closeBuyWindow } = useGeneralContext();

  const handleCancelClick = () => {
    closeBuyWindow();
  };

  return (
    <div className="container">
      <div className="regular-order">
        <div className='inputs'>

          <fieldset>
            <legend>Qty.</legend>
            <input type="number" name='qty' id='qty' />
          </fieldset>

          <fieldset>
            <legend>Price</legend>
            <input type="number" name='price' id='price' step="0.05" />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required 140.65 </span>
        <div>
          <Link className='btn btn-blue'>{orderType}</Link>
          <Link to="" className='btn btn-grey' onClick={handleCancelClick}>Cancel</Link>
        </div>
      </div>
    </div>
  )
}

export default BuyActionWindow;