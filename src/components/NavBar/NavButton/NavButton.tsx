import React from "react";
import { Dimensions } from "react-native";
import { INavButtonProps } from "../../../types/navbarType";
import classes from "./NavButton.module.css";

const handleClick = (path: string) => {
  const screenWidth = Dimensions.get("screen").width;
  const screenHeight = Dimensions.get("screen").height;
  const winTop = 0;
  const winLeft = screenWidth / 2;
  const height = screenHeight - 100;
  const width = screenWidth / 2 - 50;

  window.open(
    path,
    "myWindow",
    "width=" +
      width +
      ", height=" +
      height +
      ", left=" +
      winLeft +
      ", top=" +
      winTop +
      ", scrollbars=yes, resizable=yes"
  );
};

const NavButton: React.FC<INavButtonProps> = ({
  disabled,
  name,
  styleButton,
  path,
}) => {
  const style = classes["link"] + " " + classes[styleButton];

  if (disabled) {
    return <div className={classes.disabled}>{name}</div>;
  } else {
    return (
      <div className={style} onClick={() => handleClick(path)}>
        {name}
      </div>
    );
  }
};

export default NavButton;
