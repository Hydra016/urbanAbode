import React, { useState } from "react";

const MortgageForm = ({ mortgage }) => {
  const [mortgageValues, setMortgageValues] = useState({
    home_insurance: '',
    property_tax_rates: '',
    down_payment: '',
    price: '',
    term: '',
    hoa_fees: ''
  })

  console.log(mortgageValues.term)


  return (
    <div className="mortgage-calculator-container animated-slide-down">
      <div className="mortgage-calculator-inputBox">
        <div className="label-container">
          <label className="mortgage-calculator-label">Home insurance</label>
        </div>
        <input
          placeholder="Home insurance"
          className="mortgage-calculator-input"
          type="number"
        />
      </div>
      <div className="mortgage-calculator-inputBox">
        <div className="label-container">
          <label className="mortgage-calculator-label">Property tax rate</label>
        </div>
        <input
          value={mortgageValues.term}
          placeholder="Property tax rate"
          className="mortgage-calculator-input"
          type="number"
        />
      </div>
      <div className="mortgage-calculator-inputBox">
        <div className="label-container">
          <label className="mortgage-calculator-label">Down payment</label>
        </div>
        <input
          placeholder="Down payment"
          className="mortgage-calculator-input"
          type="number"
        />
      </div>
      <div className="mortgage-calculator-inputBox">
        <div className="label-container">
          <label className="mortgage-calculator-label">Price</label>
        </div>
        <input
          placeholder="Price"
          className="mortgage-calculator-input"
          type="number"
        />
      </div>
      <div className="mortgage-calculator-inputBox">
        <div className="label-container">
          <label className="mortgage-calculator-label">Term</label>
        </div>
        {/* <input
          placeholder="Term"
          className="mortgage-calculator-input"
          type="number"
        /> */}
        <select
        onChange={(e) => setMortgageValues({ ...mortgageValues, term: e.target.value })}
        >
        {[
            ...new Set(
              mortgage.average_rates.map((rate) => rate.loan_type.loan_id)
            ),
          ].map((type, i) => (
            <option key={i} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>
      {/* <div className="mortgage-calculator-inputBox">
        <div className="label-container">
          <label className="mortgage-calculator-label">Hoa fees</label>
        </div>
        <input
          placeholder="Hoa fees"
          className="mortgage-calculator-input"
          type="number"
        />
      </div> */}
    </div>
  );
};

export default MortgageForm;
