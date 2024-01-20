import { calculateInvestmentResults, formatter } from "../util/investment.js";

export default function Results({ input }) {
  const results = [];
  calculateInvestmentResults(input, results);

  if (results <= 0) {
    return (
      <p className="text-center">
        Pleases input duration value more than zero.
      </p>
    );
  }
  const initialInvestment =
    results[0].valueEndOfYear -
    results[0].interest -
    results[0].annualInvestment;

  return (
    <table className="max-w-[50rem] mx-auto my-8 p-4 table-fixed border-spacing-4 text-right">
      <thead className="text-xs text-emerald-200">
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody className="font-roboto text-sm text-emerald-50">
        {results.map((yearData) => {
          const totalInterest =
            yearData.valueEndOfYear -
            yearData.annualInvestment * yearData.year -
            initialInvestment;
          const totalAmountInvested = yearData.valueEndOfYear - totalInterest;

          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
