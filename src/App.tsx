import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./App.module.css";
import NavBar from "./components/NavBar/NavBar";
import MapContainer from "./components/Map/MapContainer";
import LoaderConteiner from "./components/LoaderSpinner/LoaderConteiner";
import Inform from "./components/Inform/Inform";

const App: React.FC = () => {
  return (
    <div className={classes.App}>
      <LoaderConteiner />
      <MapContainer className={classes.mapBox} />
      <NavBar className={classes.leftBox} />
      <Inform className={classes.informBox} />
      <div className={classes.mqBox}></div>
    </div>
  );
};

export default App;
