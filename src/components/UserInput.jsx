import { useState } from "react";

export default function UserInput({ onChangeValue, initialInput }) {
  const { initialInvestment, annualInvestment, expectedReturn, duration } =
    initialInput;

  function handleChange(event) {
    const { value, name: inputName } = event.target;
    onChangeValue({ ...initialInput, [inputName]: +value });
  }

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>INITAL INVESTMENT</label>
          <input
            name="initialInvestment"
            value={initialInvestment}
            type="number"
            onChange={handleChange}
            required
          ></input>
        </p>
        <p>
          <label>ANNUAL INVESTMENT</label>
          <input
            name="annualInvestment"
            value={annualInvestment}
            type="number"
            onChange={handleChange}
            required
          ></input>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>EXPECTED RETURN</label>
          <input
            name="expectedReturn"
            value={expectedReturn}
            type="number"
            onChange={handleChange}
            required
          ></input>
        </p>
        <p>
          <label>DUREATION</label>
          <input
            name="duration"
            value={duration}
            type="number"
            onChange={handleChange}
            required
          ></input>
        </p>
      </div>
    </section>
  );
}
