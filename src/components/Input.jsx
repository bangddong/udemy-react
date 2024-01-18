export default function Input({ label, ...props }) {
  return (
    <p>
      <label className="block mb-1 font-roboto text-[0.5rem] font-bold uppercase">
        {label}
      </label>
      <input
        className="w-full p-2 border-[1px] border-solid border-emerald-300 rounded bg-transparent text-emerald-50 text-base"
        {...props}
      />
    </p>
  );
}
