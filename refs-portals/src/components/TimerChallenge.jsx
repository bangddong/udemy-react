import { useRef, useState } from "react";

import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();

  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

  const timmerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialog.current.open();
  }

  function handleReset() {
    setTimeRemaining(targetTime * 1000);
  }

  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10);
    }, 10);
  }

  function handleStop() {
    dialog.current.open();
    clearInterval(timer.current);
  }

  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        remainingTime={timeRemaining}
        onReset={handleReset}
      />
      <section className="w-[22rem] flex flex-col items-center justify-center p-8 mx-auto my-8 bg-gradient-radial-challenge text-[#221c18] shadow-challenge-box rounded-[6px]">
        <h2 className="text-2xl tracking-widest m-0 text-center uppercase text-[#221c18]">
          {title}
        </h2>
        <p className="border-[1px] border-solid border-[#46cebe] rounded-[4px] px-1 py-2 m-2">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button
            onClick={timmerIsActive ? handleStop : handleStart}
            className="mt-4 px-4 py-2 border-none rounded-[4px] bg-button text-[#edfcfa] text-xl cursor-pointer hover:bg-[#051715]"
          >
            {timmerIsActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timmerIsActive ? "animate-challenge-active" : undefined}>
          {timmerIsActive ? "Time is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
