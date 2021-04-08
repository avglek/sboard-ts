import React from "react";
import LoaderSpinner from "./LoaderSpinner";
//import classes from "./LoaderSpinner.module.css";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const LoaderConteiner: React.FC = () => {
  const state = useTypedSelector((state) => state);

  const navLoading = state.navbar.loading;
  const mapLoading = state.mapsvg.loading;
  const stnLoading = state.stantion.loading;
  const picketLoading = state.picket.loading;

  if (navLoading || mapLoading || stnLoading || picketLoading) {
    return <LoaderSpinner />;
  } else {
    return null;
  }
};

export default LoaderConteiner;
