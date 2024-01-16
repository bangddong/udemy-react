import { useState } from "react";
import Header from "./components/Header";
import Result from "./components/Result";
import UserInput from "./components/UserInput";
import { calculateInvestmentResults } from "./util/investment";

function App() {
  const [inputValues, setInputValues] = useState(0, 0, 0, 0);

  const annualDataList = calculateInvestmentResults({ ...inputValues });

  let calcAnnualDataList = [...annualDataList];
  let totalInterrest = 0;
  for (let i = 0; i < calcAnnualDataList.length; i++) {
    const data = calcAnnualDataList[i];
    totalInterrest = totalInterrest + data.interest;
    let investedCaptial = 0;
    investedCaptial = data.valueEndOfYear - totalInterrest;
    calcAnnualDataList[i] = { ...data, totalInterrest, investedCaptial };
  }

  function handleInputChange(changeValues) {
    setInputValues(changeValues);
  }

  return (
    <>
      <Header />
      <UserInput initialInput={inputValues} onChangeValue={handleInputChange} />
      <Result annualDataList={calcAnnualDataList} />
    </>
  );
}

export default App;
