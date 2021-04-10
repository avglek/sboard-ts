import React from "react";
import { useActions } from "../../../../../hooks/useActions";
import { useTypedSelector } from "../../../../../hooks/useTypedSelector";
import classes from "./ClearButton.module.css";

const ClearButton: React.FC = () => {
  const { items } = useTypedSelector((state) => state.layer);
  const { postLayer } = useActions();

  const onClick = () => {
    const layers = items.map((block) => {
      return {
        ...block,
        data: block.data.map((item) => ({ ...item, show: false })),
      };
    });
    postLayer(layers);
  };

  return (
    <div className={classes.clearButton}>
      <div className={classes.btn} onClick={onClick}>
        Очистить
      </div>
    </div>
  );
};

export default ClearButton;
