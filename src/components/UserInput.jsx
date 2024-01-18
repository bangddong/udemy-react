// TODO : label과 input이 계속 중복된다. 별도 Component로 분리 필요

export default function UserInput({ onChange, userInput }) {
  return (
    <section className="p-4 max-w-[30rem] my-8 mx-auto border-r-4 bg-gradient-to-r from-emerald-700 to-emerald-600">
      <div className="flex justify-evenly gap-6">
        <p>
          <label className="block mb-1 font-roboto text-[0.5rem] font-bold uppercase">
            Initial Investment
          </label>
          <input
            className="w-full p-2 border-[1px] border-solid border-emerald-300 rounded bg-transparent text-emerald-50 text-base"
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={(event) =>
              onChange("initialInvestment", event.target.value)
            }
          />
        </p>
        <p>
          <label className="block mb-1 font-roboto text-[0.5rem] font-bold uppercase">
            Annual Investment
          </label>
          <input
            className="w-full p-2 border-[1px] border-solid border-emerald-300 rounded bg-transparent text-emerald-50 text-base"
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={(event) =>
              onChange("annualInvestment", event.target.value)
            }
          />
        </p>
      </div>
      <div className="flex justify-evenly gap-6">
        <p>
          <label className="block mb-1 font-roboto text-[0.5rem] font-bold uppercase">
            Expected Return
          </label>
          <input
            className="w-full p-2 border-[1px] border-solid border-emerald-300 rounded bg-transparent text-emerald-50 text-base"
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={(event) => onChange("expectedReturn", event.target.value)}
          />
        </p>
        <p>
          <label className="block mb-1 font-roboto text-[0.5rem] font-bold uppercase">
            Duration
          </label>
          <input
            className="w-full p-2 border-[1px] border-solid border-emerald-300 rounded bg-transparent text-emerald-50 text-base"
            type="number"
            required
            value={userInput.duration}
            onChange={(event) => onChange("duration", event.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
