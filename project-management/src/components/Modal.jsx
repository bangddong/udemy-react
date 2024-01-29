import { createPortal } from "react-dom";
import { forwardRef, useImperativeHandle } from "react";

import Button from "./Button";

const Modal = forwardRef(function Modal({ children, buttonCaption }, ref) {
  const dialog = ureRef();

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current.showModal();
      },
      close: () => {
        dialog.current.close();
      },
    };
  });

  return createPortal(
    <dialog
      ref={dialog}
      className="p-4 rounded-md shadow-md backdrop:bg-stone-900/90"
    >
      {children}
      <form mehtod="dialog" className="mt-4 text-right">
        <Button>{buttonCaption}</Button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;
