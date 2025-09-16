import { useRef } from "react";
import { forwardRef, useImperativeHandle } from "react";
import Button from "./Button";

const Modal = forwardRef(function Modal({ children, closeModal }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => ({
    open() {
      if (dialog.current) {
        dialog.current.showModal();
      }
    },
    close() {
      if (dialog.current) {
        dialog.current.closeModal();
      }
    }
  }));

  return (
    <>
      <dialog className='result-modal p-4' ref={dialog}>
        {children}
        <form method='dialog' onSubmit={closeModal} className="text-right mt-4">
          <Button>Close</Button>
        </form>
      </dialog>
    </>
  )
});

export default Modal;