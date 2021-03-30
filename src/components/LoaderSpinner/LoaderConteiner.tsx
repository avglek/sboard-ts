import React from "react";
import LoaderSpinner from "./LoaderSpinner";
import classes from "./LoaderSpinner.module.css";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const LoaderConteiner: React.FC = () => {
  const state = useTypedSelector((state) => state);

  const navLoading = state.navbar.loading;
  //const mapLoading = state.mapsvg.loading;

  //if (navLoading || mapLoading) {
  if (navLoading) {
    return (
      <div className={classes.LoaderBox}>
        <LoaderSpinner />
      </div>
    );
  } else {
    return null;
  }
};

export default LoaderConteiner;
