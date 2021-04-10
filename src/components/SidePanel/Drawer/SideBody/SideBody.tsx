import React from "react";
import AccordionBody from "./Accordion/AccordionBody";
import ClearButton from "./ClearButton/ClearButton";
import classes from "./SideBody.module.css";
import StationSearch from "./StationSearch/StationSearch";

const SideBody: React.FC = () => {
  // const { resetZoom } = useTypedSelector((state) => state.layer);
  // const handlerClear = (): void => {
  //   console.log("click clear");
  //   if (resetZoom) resetZoom();
  // };

  return (
    <div className={classes.SideBody}>
      <StationSearch />
      <AccordionBody />
      <ClearButton />
    </div>
  );
};

export default SideBody;
