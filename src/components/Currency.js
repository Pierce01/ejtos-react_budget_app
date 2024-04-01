import React, { useContext, useEffect } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = (props) => {
  const { dispatch, currency  } = useContext(AppContext);

  const handleCurrencySymChange = (event) => {
    dispatch({
      type: 'CHG_CURRENCY',
      payload: event.target.value
    })
  }

  useEffect(() => {
    document.getElementById('currency').value = currency
  })

  return (
    <div style={{ display: 'flex' }}>
      <div className="input-group-prepend">
        <label className="input-group-text" htmlFor="inputGroupSelect01">Currency</label>
      </div>
      <select className="custom-select" id="currency" onChange={handleCurrencySymChange}>
        <option value="$">$ Dollar</option>
          <option value="£">£ Pound</option>
          <option value="€">€ Euro</option>
          <option value="₹">₹ Ruppee</option>
      </select>
    </div>
  );
}

export default Currency;