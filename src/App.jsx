import { useState } from "react";
import Header from "./components/Header";
import Result from "./components/Result";
import UserInput from "./components/UserInput";
import { calculateInvestmentResults } from "./util/investment";

function App() {
  const [inputValues, setInputValues] = useState(0, 0, 0, 0);

  const annualDataList = calculateInvestmentResults({ ...inputValues });

  function handleInputChange(changeValues) {
    setInputValues(changeValues);
  }

  return (
    <>
      <Header />
      <UserInput initialInput={inputValues} onChangeValue={handleInputChange} />
      <Result annualDataList={annualDataList} />
    </>
  );
}

export default App;
