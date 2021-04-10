import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./bootstrapCustomStyle.css";
import classes from "./App.module.css";
import NavBar from "./components/NavBar/NavBar";
import MapContainer from "./components/Map/MapContainer";
import LoaderConteiner from "./components/LoaderSpinner/LoaderConteiner";
import Inform from "./components/Inform/Inform";
//import DataService from "./services/DataService";
import Report from "./components/Report/Report";
import FaultInicator from "./components/FaultInicator/FaultInicator";
import Drawer from "./components/SidePanel/Drawer/Drawer";

//const testService = new DataService();

const App: React.FC = () => {
  //testService.getStantions();
  return (
    <div className={classes.App}>
      <div className={classes.context} id="context"></div>
      <div className={classes.stooltip} id="stooltip"></div>
      <FaultInicator />
      <LoaderConteiner />
      <Report />
      <MapContainer className={classes.mapBox} />
      <NavBar className={classes.leftBox} />
      <Inform className={classes.informBox} />
      <div className={classes.mqBox}></div>
      <Drawer />
    </div>
  );
};

export default App;
