import React, { useEffect } from "react";
import classes from "./App.module.css";
import NavBar from "./components/NavBar/NavBar";
import MapContainer from "./components/Map/MapContainer";
import LoaderConteiner from "./components/LoaderSpinner/LoaderConteiner";
import { useActions } from "./hooks/useActions";

const App: React.FC = () => {
  const { loadMapSvg } = useActions();

  useEffect(() => {
    loadMapSvg("main");
  }, [loadMapSvg]);

  return (
    <div className={classes.App}>
      <LoaderConteiner />
      <MapContainer className={classes.mapBox} />
      <NavBar className={classes.leftBox} />
      <div className={classes.informBox}></div>
      <div className={classes.mqBox}></div>
    </div>
  );
};

export default App;
