import { formatter } from "../util/investment";

export default function Result({ annualDataList }) {
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
        {annualDataList.map((annualData) => (
          <tr key={annualData.year}>
            <td>{annualData.year}</td>
            <td>{formatter.format(annualData.valueEndOfYear)}</td>
            <td>{formatter.format(annualData.interest)}</td>
            <td>{formatter.format(annualData.totalInterrest)}</td>
            <td>{formatter.format(annualData.investedCaptial)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
