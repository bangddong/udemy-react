import { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModal = forwardRef(function ResultModal(
  { targetTime, remainingTime, onReset },
  ref
) {
  const dialog = useRef();

  const userLost = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

  // 인자로 받은 ref를 맵핑하여 외부 컴포넌트에 open() 함수를 노출한다.
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  const pStyle = "mx-0 my-2 text-[1.2rem]";
  const pStrongStyle = "text-[#10655b]";
  const h2Style = "font-handjet mt-0 mr-0 mb-1 ml-0 text-[3rem] uppercase";

  return (
    <dialog
      onClose={onReset}
      ref={dialog}
      className="border-none rounded-lg p-8 bg-[#d7fcf8] backdrop:bg-modal open:animate-modal-open"
    >
      {userLost && <h2 className={h2Style}>You lost</h2>}
      {!userLost && <h2 className={h2Style}>Your Score: {score}</h2>}
      <p className={pStyle}>
        The target time was{" "}
        <strong className={pStrongStyle}>{targetTime} seconds.</strong>
      </p>
      <p className={pStyle}>
        You stopped the time with{" "}
        <strong className={pStrongStyle}>
          {formattedRemainingTime} seconds left.
        </strong>
      </p>
      <form onSubmit={onReset} className="text-right" methd="dialog">
        <button className="mt-4 px-4 py-2 border-none rounded-[4px] bg-button text-[#edfcfa] text-[1.2rem] cursor-pointer hover:bg-[#051715]">
          Close
        </button>
      </form>
    </dialog>
  );
});

export default ResultModal;
