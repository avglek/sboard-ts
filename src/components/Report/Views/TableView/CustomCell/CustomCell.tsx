import React from "react";
import * as CSS from "csstype";
import { IColunm } from "../../../../../types/tableViewType";
import classes from "./CustomCell.module.css";

interface Props {
  row: any;
  column: IColunm;
}

const CustomCell: React.FC<Props> = ({ row, column }) => {
  let aling = column.center ? "center" : "left";
  aling = column.right ? "right" : aling;

  let value, color;
  const cellItem = row[column.selector];

  if (typeof cellItem === "object" && cellItem) {
    value = cellItem.value;
    color = cellItem.style;
  } else {
    value = cellItem;
    color = "wait";
  }

  return (
    <div
      className={classes.CustomCell}
      style={{ background: color, textAlign: aling as CSS.Property.TextAlign }}
    >
      <p>{value}</p>
    </div>
  );
};

export default CustomCell;
