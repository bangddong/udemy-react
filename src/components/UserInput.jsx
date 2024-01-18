import Input from "./Input";

export default function UserInput({ onChange, userInput }) {
  return (
    <section className="p-4 max-w-[30rem] my-8 mx-auto border-r-4 bg-gradient-to-r from-emerald-700 to-emerald-600">
      <div className="flex justify-evenly gap-6">
        <Input
          label="Initial Investment"
          type="number"
          required
          value={userInput.initialInvestment}
          onChange={(event) =>
            onChange("initialInvestment", event.target.value)
          }
        />
        <Input
          label="Annual Investment"
          type="number"
          required
          value={userInput.annualInvestment}
          onChange={(event) => onChange("annualInvestment", event.target.value)}
        />
      </div>
      <div className="flex justify-evenly gap-6">
        <Input
          label="Expected Return"
          type="number"
          required
          value={userInput.expectedReturn}
          onChange={(event) => onChange("expectedReturn", event.target.value)}
        />

        <Input
          label="Duration"
          type="number"
          required
          value={userInput.duration}
          onChange={(event) => onChange("duration", event.target.value)}
        />
      </div>
    </section>
  );
}
