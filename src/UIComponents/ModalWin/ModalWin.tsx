import React, { useState } from "react";
import Draggable from "react-draggable";
import { MdCancel } from "react-icons/md";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import classes from "./ModalWin.module.css";

interface Props {
  title?: string;
  children?: React.ReactNode;
}

const ModalWin: React.FC<Props> = ({ children, title }) => {
  const [cursor, setCursor] = useState("default");
  const { isOpen } = useTypedSelector((state) => state.report);
  const { modalClose } = useActions();

  const handleStart = () => {
    setCursor("move");
  };

  const handleStop = () => {
    setCursor("default");
  };

  return (
    <div
      className={classes.ModalBackgraund}
      style={{ visibility: isOpen ? "visible" : "hidden" }}
    >
      <Draggable handle="#head" onStart={handleStart} onStop={handleStop}>
        <div className={classes.ModalWin} style={{ cursor: cursor }}>
          <div id="head" className={classes.ModalHead}>
            <div className={classes.ModalTitle}>{title}</div>

            <div className={classes.ModalBtnClose} onClick={() => modalClose()}>
              <MdCancel />
            </div>
          </div>
          <div className={classes.ModalBody}>{children}</div>
        </div>
      </Draggable>
    </div>
  );
};

export default ModalWin;
