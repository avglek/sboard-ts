import React from "react";
import classes from "./App.module.css";
import NavBar from "./components/NavBar/NavBar";

const App: React.FC = () => {
  return (
    <div className={classes.App}>
      <div className={classes.mapBox}></div>
      <NavBar className={classes.leftBox} />
      <div className={classes.informBox}></div>
      <div className={classes.mqBox}></div>
    </div>
  );
};

export default App;
