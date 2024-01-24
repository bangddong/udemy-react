import { forwardRef, useImperativeHandle } from "react";

const ResultModal = forwardRef(function ResultModal(
  { result, targetTime },
  ref
) {
  useImperativeHandle;

  const pStyle = "mx-0 my-2 text-[1.2rem]";
  const pStrongStyle = "text-[#10655b]";

  return (
    <dialog
      ref={ref}
      className="border-none rounded-lg p-8 bg-[#d7fcf8] backdrop:bg-modal open:animate-modal-open"
    >
      <h2 className="font-handjet mt-0 mr-0 mb-1 ml-0 text-[3rem] uppercase">
        You {result}
      </h2>
      <p className={pStyle}>
        The target time was{" "}
        <strong className={pStrongStyle}>{targetTime} seconds.</strong>
      </p>
      <p className={pStyle}>
        You stopped the time with <strong className={pStrongStyle}>X</strong>{" "}
        secnds left.
      </p>
      <form className="text-right" methd="dialog">
        <button className="mt-4 px-4 py-2 border-none rounded-[4px] bg-button text-[#edfcfa] text-[1.2rem] cursor-pointer hover:bg-[#051715]">
          Close
        </button>
      </form>
    </dialog>
  );
});

export default ResultModal;
