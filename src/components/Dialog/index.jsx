import { useEffect, useRef } from "react";
import "./dialog.css";
import { IconClose } from "../icons";

export default function Dialog({ isOpen, onClose, children }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      openDialog();
    } else {
      closeDialog();
    }
  }, [isOpen]);

  const openDialog = () => {
    dialogRef.current.showModal();
  };

  const closeDialog = () => {
    dialogRef.current.close();
  };

  return (
    <>
      <dialog className="dialog" ref={dialogRef}>
        <div className="wrapper-btn-close">
          <button className="btn-close" autoFocus onClick={onClose}>
            <IconClose />
          </button>
        </div>
        {children}
      </dialog>
    </>
  );
}
