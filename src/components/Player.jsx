export default function Player() {
  return (
    <section className="text-center">
      <h2 className="text-main">Welcome unknown entity</h2>
      <p className="flex items-center justify-center">
        <input
          className="border-[1px] border-solid border-main bg-[#192f2b] rounded-[4px] rounded-tr-none rounded-br-none p-1 text-[#d1f0ec]"
          type="text"
        />
        <button className="cursor-pointer bg-main border-[1px] border-solid border-main py-[0.4rem] px-4 text-[#061e1a] rounded-tr-[4px] rounded-br-[4px] hover:bg-hover hover:border-hover">
          Set Name
        </button>
      </p>
    </section>
  );
}
