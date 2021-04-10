import React from "react";
import classes from "./CheckBlock.module.css";
import { LayerDescript } from "../../../../../types/layerType";

type Props = {
  blockCheck: LayerDescript[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const CheckBlock: React.FC<Props> = ({ blockCheck, onChange }) => {
  return (
    <div className={classes.CheckBlock}>
      <ul className="ulapp">
        {blockCheck.map((item, index) => {
          return (
            <li key={index} style={{ visibility: item.visible as any }}>
              <label>
                <input
                  type="checkbox"
                  checked={item.show}
                  onChange={onChange}
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
