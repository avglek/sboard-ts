import React from "react";
import classes from "./Forecast.module.css";

interface Props {
  period: string;
  img: string;
  name: string;
  handleClick: any;
}

const formatPeriod = (text: string): string[] => {
  const arr = text.trim().split(" - ");
  return arr;
};

const ForecastTitle: React.FC<Props> = ({ period, img, name, handleClick }) => {
  const arr = formatPeriod(period);
  return (
    <div className={classes.title}>
      <img src={img} alt={name} onClick={handleClick} />
      <ul>
        <li>{arr[0]} </li>
        <li>{arr[1]}</li>
      </ul>
    </div>
  );
};

export default ForecastTitle;
