import React, { useEffect, useState } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import classes from "./FaultInicator.module.css";

const FaultInicator: React.FC = () => {
  const [show, setShow] = useState(false);
  const state = useTypedSelector((state) => state);

  const messageError =
    state.picket.error ||
    state.navbar.error ||
    state.forecast.error ||
    state.mapsvg.error ||
    state.stantion.error;

  useEffect(() => {
    if (messageError) {
      setShow(true);
    }
  }, [messageError]);

  if (show) {
    return (
      <div className={classes.FaultInicator}>
        <div className={classes.FaultBody}>{messageError}</div>
      </div>
    );
  } else {
    return null;
  }
};

export default FaultInicator;
