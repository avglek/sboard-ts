import React from "react";
import classes from "./CheckBlock.module.css";
import { LayerDescript } from "../../../../../types/layerType";

type Props = {
  items: LayerDescript[];
  idGroup: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>, uid: number) => void;
};

const CheckBlock: React.FC<Props> = ({ idGroup, onChange, items }) => {
  return (
    <div className={classes.CheckBlock}>
      <ul className="ulapp">
        {items
          .filter((item) => item.group === idGroup)
          .map((item, index) => {
            return (
              <li key={index} style={{ visibility: item.visible as any }}>
                <label>
                  <input
                    type="checkbox"
                    checked={item.check}
                    onChange={(e) => onChange(e, item.id)}
                    name={item.layer}
                    disabled={item.disabled} //{!props.SpecKey}
                  />

                  <span style={{ paddingLeft: "0.5rem" }}></span>
                  {item.name}
                </label>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default CheckBlock;
