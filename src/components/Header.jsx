import logo from "../assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <header className="text-center mx-auto my-12">
      <img
        className="w-20 h-20 object-contain bg-transparent"
        src={logo}
        alt="investment-calculator-logo"
      />
      <h1 className="text-2xl">Investment Calculator</h1>
    </header>
  );
}
