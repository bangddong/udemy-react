import { useState } from "react";
import Header from "./components/Header";
import Result from "./components/Result";
import UserInput from "./components/UserInput";
import { calculateInvestmentResults } from "./util/investment";

const INITIAL_INPUT = {
  initialInvestment: 0,
  annualInvestment: 0,
  expectedReturn: 0,
  duration: 0,
};

function App() {
  const [annualDataList, setAnnualData] = useState(
    calculateInvestmentResults(INITIAL_INPUT)
  );
  function handleInputChange(inputValues) {
    console.log(inputValues);
  }

  return (
    <>
      <Header />
      <UserInput
        initialInput={INITIAL_INPUT}
        onChangeValue={handleInputChange}
      />
      <Result annualDataList={annualDataList} />
    </>
  );
}

export default App;
