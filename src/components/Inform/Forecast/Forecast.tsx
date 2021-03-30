import React, { useEffect, useState } from "react";
import classes from "./Forecast.module.css";
import ForecastTitle from "./ForecastTitle";
import { fetchForecast } from "../../../store/actions/forecatsAction";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { parsePeriodToString2 } from "../../../utils/common";

const dayIcon = "./svg/icons/forecast/day.svg";
const nightIcon = "./svg/icons/forecast/night.svg";

const parseDate = (dateString: string): string => {
  if (dateString) {
    const arr = dateString.trim().split("-");
    return `${arr[2]}-${arr[1]}-${arr[0]}`;
  }
  return "";
};

const initForecast = {
  url: dayIcon,
  period: "",
  text: "",
  name: "day",
};

const Forecast: React.FC = () => {
  const [forecastItem, setForecastItem] = useState(initForecast);

  const { items } = useTypedSelector((state) => state.forecast);
  const { descript } = useTypedSelector((state) => state.mapsvg);
  const dispatch = useDispatch();

  useEffect(() => {
    const reg = descript && descript.uid;
    
    if (reg && reg !== 10) {
      dispatch(fetchForecast(reg));
    }
  }, [descript, dispatch]);

  useEffect(() => {
    if (items.length > 0) {
      setForecastItem({
        url: dayIcon,
        period: parsePeriodToString2(items[0].day.period),
        text: items[0].day.prognoz,
        name: "day",
      });
    }
  }, [items]);

  const handleClick = () => {
    if (forecastItem.name === "day") {
      setForecastItem({
        url: nightIcon,
        period: parsePeriodToString2(items[0].night.period),
        text: items[0].night.prognoz,
        name: "night",
      });
    } else {
      setForecastItem({
        url: dayIcon,
        period: parsePeriodToString2(items[0].day.period),
        text: items[0].day.prognoz,
        name: "day",
      });
    }
  };

  const dateStr = items[0] ? parseDate(items[0].date) : "";
  const date = new Date(dateStr);
  const textFormat = forecastItem.text.split(";").join(". ");

  return (
    <div className={classes.Forecast}>
      <div className={classes.Header}>
        Прогноз погоды на {date.toLocaleDateString()}
      </div>
      <div className={classes.Body}>
        <ForecastTitle
          period={forecastItem.period}
          img={forecastItem.url}
          name={forecastItem.name}
          handleClick={handleClick}
        />
        <div className={classes.Text}>
          <p>{textFormat}</p>
        </div>
      </div>
    </div>
  );
};

export default Forecast;
