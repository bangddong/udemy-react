import { formatter } from "../util/investment";

export default function Result({ annualDataList }) {
  const initialInvestment =
    annualDataList[0].valueEndOfYear -
    annualDataList[0].interest -
    annualDataList[0].annualInvestment;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {annualDataList.map((annualData) => {
          const totalInterrest =
            annualData.valueEndOfYear -
            annualData.annualInvestment * annualData.year -
            initialInvestment;
          const totalAmonutInvested =
            annualData.valueEndOfYear - totalInterrest;

          return (
            <tr key={annualData.year}>
              <td>{annualData.year}</td>
              <td>{formatter.format(annualData.valueEndOfYear)}</td>
              <td>{formatter.format(annualData.interest)}</td>
              <td>{formatter.format(totalInterrest)}</td>
              <td>{formatter.format(totalAmonutInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
