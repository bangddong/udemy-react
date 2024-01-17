import { useState } from "react";
import Header from "./components/Header";
import Result from "./components/Result";
import UserInput from "./components/UserInput";
import { calculateInvestmentResults } from "./util/investment";

function App() {
  const [inputValues, setInputValues] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = inputValues.duration >= 1;

  const annualDataList = calculateInvestmentResults({ ...inputValues });

  function handleInputChange(changeValues) {
    setInputValues(changeValues);
  }

  return (
    <>
      <Header />
      <UserInput initialInput={inputValues} onChangeValue={handleInputChange} />
      {!inputIsValid && (
        <p className="center">Please enter a duration greater than zero.</p>
      )}
      {inputIsValid && <Result annualDataList={annualDataList} />}
    </>
  );
}

export default App;
