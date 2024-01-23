import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef(0);
  let test = 0;
  console.log(test);
  test = test + 1;
  console.log(test);
  const [enteredPlyaerName, setEnteredPlayerName] = useState(null);

  function handleClick() {
    // ref를 통해 input method에 접근할 수 있다.
    setEnteredPlayerName(playerName.current.value);
  }

  return (
    <section className="text-center">
      <h2 className="text-main">
        Welcome {enteredPlyaerName ?? "unknown entity"}
      </h2>
      <p className="flex items-center justify-center">
        <input
          ref={playerName}
          className="border-[1px] border-solid border-main bg-[#192f2b] rounded-[4px] rounded-tr-none rounded-br-none p-1 text-[#d1f0ec]"
          type="text"
        />
        <button
          onClick={handleClick}
          className="cursor-pointer bg-main border-[1px] border-solid border-main py-[0.4rem] px-4 text-[#061e1a] rounded-tr-[4px] rounded-br-[4px] hover:bg-hover hover:border-hover"
        >
          Set Name
        </button>
      </p>
    </section>
  );
}
