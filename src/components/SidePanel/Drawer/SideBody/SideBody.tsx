import React from "react";
import AccordionBody from "./Accordion/AccordionBody";
import ClearButton from "./ClearButton/ClearButton";
import classes from "./SideBody.module.css";
import StationSearch from "./StationSearch/StationSearch";

const SideBody: React.FC = () => {
  return (
    <div className={classes.SideBody}>
      <StationSearch />
      <AccordionBody />
      <ClearButton />
    </div>
  );
};

export default SideBody;
