import React from "react";

const PriceResults = ({ handleChange, inputData }) => {
  return (
    <div className="priceResults">
      <h3>Prix</h3>
      <div className="prices">
        <div className="price-input">
          <label>Minimum</label>
          <input
            type="number"
            value={inputData.price.minimum}
            name="minimum"
            onChange={handleChange}
          />
        </div>
        <div className="price-input">
          <label>Maximum</label>
          <input
            type="number"
            value={inputData.price.maximum}
            name='maximum'
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default PriceResults;
