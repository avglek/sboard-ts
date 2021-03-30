import React, { useEffect, useState } from "react";
import classes from "./Inform.module.css";
import Legend from "./Legend";
import SpecReg from "./SpecReg";
import Forecast from "./Forecast/Forecast";
import ToggleMapButton from "./ToggleMapButton/ToggleMapButton";
import { useTypedSelector } from "../../hooks/useTypedSelector";
//import { loadStorage } from "../../utils/initUtils";

interface Props {
  className: string;
}

//const initMap = loadStorage();

const Inform: React.FC<Props> = ({ className }) => {
  const [isForecast, setIsForecast] = useState(false);
  const { descript } = useTypedSelector((state) => state.mapsvg);

  useEffect(() => {
    if (descript)
      if (descript.uid === 10 || descript.uid === 0) {
        setIsForecast(false);
      } else {
        setIsForecast(true);
      }
  }, [descript]);

  return (
    <div className={className}>
      {isForecast ? <Forecast /> : <ToggleMapButton />}
      <SpecReg className={classes.spec_box} />
      <Legend className={classes.legend_box} />
    </div>
  );
};

export default Inform;
