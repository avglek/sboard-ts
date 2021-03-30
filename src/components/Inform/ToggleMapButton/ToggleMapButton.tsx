import React from "react";
import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { IMapStorage } from "../../../types/mapConfigType";
import classes from "./ToggleMapButton.module.css";

const saveLocalStorage = (storage: IMapStorage) => {
  const mapRaw = JSON.stringify(storage);
  localStorage.setItem("map", mapRaw);
};

const ToggleMapButton: React.FC = () => {
  const { toggle, img, key } = useTypedSelector((state) => state.mapconf);
  const { setConfMain } = useActions();

  const handlerToggle = (): void => {
    if (toggle) {
      const conf = {
        toggle: false,
        img: "./svg/icons/button/map.svg",
        key: "big_main",
        uid: 10,
      };
      setConfMain(conf);
      saveLocalStorage(conf);
    } else {
      const conf = {
        toggle: true,
        img: "./svg/icons/button/flat.svg",
        key: "main",
        uid: 0,
      };
      setConfMain(conf);
      saveLocalStorage(conf);
    }
  };

  return (
    <div className={classes.ToggleMapButton}>
      <img src={img || ""} alt={key || ""} onClick={handlerToggle} />
    </div>
  );
};

export default ToggleMapButton;
