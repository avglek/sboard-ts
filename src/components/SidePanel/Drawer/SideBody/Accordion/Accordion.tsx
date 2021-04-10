import React, { useState, useRef } from "react";
import classes from "./Accordion.module.css";
import Chevron from "./Chevron";

const Accordion: React.FC<{ title: string }> = ({ title, children }) => {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState(classes.AccordionIcon);

  const content = useRef<HTMLDivElement>(null);

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current!.scrollHeight}px`
    );
    setRotateState(
      setActive === "active"
        ? classes.AccordionIcon
        : `${classes.AccordionIcon} ${classes.rotate}`
    );
  }

  return (
    <div className={classes.AccordionSection}>
      <div
        className={`${classes.Accordion} ${classes[setActive]}`}
        onClick={toggleAccordion}
      >
        <Chevron className={setRotate} fill={"#777"} />

        <p className={classes.AccordionTitle}>{title}</p>
      </div>
      <div
        ref={content}
        className={classes.AccordionContent}
        style={{ maxHeight: `${setHeight}` }}
      >
        <div className={classes.AccordionText} />
        {children}
      </div>
    </div>
  );
};

export default Accordion;
