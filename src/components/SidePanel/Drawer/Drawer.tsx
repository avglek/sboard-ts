import React, { useState } from "react";
import classes from "./Drawer.module.css";
import SideBody from "./SideBody/SideBody";
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";
import { IconContext } from "react-icons";

const Drawer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cls = [classes.Drawer];

  if (!isOpen) {
    cls.push(classes.close);
  }

  const onToggleHandle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={cls.join(" ")}>
      <div className={classes.bookmark} onClick={onToggleHandle}>
        <IconContext.Provider value={{ className: classes.icon }}>
          <div>{isOpen ? <FiChevronsRight /> : <FiChevronsLeft />}</div>
        </IconContext.Provider>
      </div>
      <div className={classes.slideBody}>
        <SideBody />
      </div>
    </div>
  );
};

export default Drawer;
