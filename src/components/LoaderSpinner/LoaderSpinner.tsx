import React from "react";
import classes from "./LoaderSpinner.module.css";

type Props = {
  style?: any;
};

const LoaderSpinner: React.FC<Props> = ({ style = {} }) => {
  return (
    <div className={classes.LoaderBox} style={style}>
      <div className={classes.LoaderSpinner}>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};
export default LoaderSpinner;
