import React, { useState } from "react";
import wordsToNumbers from "words-to-numbers";

const convertLoanTypeToNumber = (loanType) => {
  const firstWord = loanType.split("_")[0];
  const numericValue = wordsToNumbers(firstWord);
  return numericValue || null;
};

const MortgageForm = ({ mortgage }) => {
  const [mortgageValues, setMortgageValues] = useState({
    home_insurance: 56,
    property_tax_rates: mortgage && mortgage.average_rates[0].rate,
    down_payment: mortgage && mortgage.estimate.down_payment,
    price: mortgage.estimate.total_payment,
    term: mortgage && convertLoanTypeToNumber(mortgage.average_rates[0].loan_type.loan_id),
    hoa_fees: 0
  })

  const getRateForLoanId = (loanId) => {
    const selectedRate = mortgage.average_rates.find(rate => rate.loan_type.loan_id === loanId);
    setMortgageValues({...mortgageValues, property_tax_rates: selectedRate.rate, term: convertLoanTypeToNumber(loanId)})
  };

  console.log(mortgageValues)

  return (
    <div className="mortgage-calculator-container animated-slide-down">

      <div className="mortgage-calculator-inputBox">
        <div className="label-container">
          <label className="mortgage-calculator-label">Property tax rate</label>
        </div>
        <input
          value={mortgageValues.property_tax_rates}
          placeholder="Property tax rate"
          className="mortgage-calculator-input"
          type="text"
          disabled
        />
      </div>
      <div className="mortgage-calculator-inputBox">
        <div className="label-container">
          <label className="mortgage-calculator-label">Down payment</label>
          <span className="down_payment">min: {mortgage.estimate.down_payment}</span>
        </div>
        <input
          placeholder="Down payment"
          className="mortgage-calculator-input"
          type="number"
          value={mortgageValues.down_payment}
          onChange={(e) => setMortgageValues({ ...mortgageValues, down_payment: e.target.value })}
        />
      </div>
      <div className="mortgage-calculator-inputBox">
        <div className="label-container">
          <label className="mortgage-calculator-label">Interest Rate (constant)</label>
        </div>
        <input
          value={3.827}
          className="mortgage-calculator-input"
          type="text"
          disabled
        />
      </div>
      <div className="mortgage-calculator-inputBox">
        <div className="label-container">
          <label className="mortgage-calculator-label">Term</label>
        </div>
        <select
        onChange={(e) => {
          getRateForLoanId(e.target.value)
        }}
        >
        {mortgage.average_rates.map((rate, i) => {
          return (
            <option key={i} value={rate.loan_type.loan_id}>
              {rate.loan_type.loan_id}
            </option>
          )
        })}
        </select>
      </div>
      <div className="mortgage-calculate-btn-container">
      <button className="secondary-btn btn-contact-form">
        Calculate
      </button>
      </div>
      
    </div>
  );
};

export default MortgageForm;
