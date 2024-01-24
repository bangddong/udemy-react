import { useRef, useState } from "react";

import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();

  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  function handleStart() {
    timer.current = setTimeout(() => {
      setTimerExpired(true);
      dialog.current.showModal();
    }, targetTime * 1000);

    setTimerStarted(true);
  }

  function handleStop() {
    clearTimeout(timer.current);
  }

  return (
    <>
      <ResultModal ref={dialog} targetTime={targetTime} result="lost" />
      <section className="w-[22rem] flex flex-col items-center justify-center p-8 mx-auto my-8 bg-gradient-radial-challenge text-[#221c18] shadow-challenge-box rounded-[6px]">
        <h2 className="text-2xl tracking-widest m-0 text-center uppercase text-[#221c18]">
          {title}
        </h2>
        <p className="border-[1px] border-solid border-[#46cebe] rounded-[4px] px-1 py-2 m-2">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button
            onClick={timerStarted ? handleStop : handleStart}
            className="mt-4 px-4 py-2 border-none rounded-[4px] bg-button text-[#edfcfa] text-xl cursor-pointer hover:bg-[#051715]"
          >
            {timerStarted ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerStarted ? "animate-challenge-active" : undefined}>
          {timerStarted ? "Time is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
