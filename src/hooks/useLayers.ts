import { useEffect } from "react";
import { ShowLayer } from "../utils/layerUtils";
import { useTypedSelector } from "./useTypedSelector";

export const useLayers = () => {
  const { items, lastCheck } = useTypedSelector((state) => state.layer);
  const { success } = useTypedSelector((state) => state.mapsvg);

  useEffect(() => {
    if (success) {
      console.log(items);
      ShowLayer(items);
    }
  }, [items, success]);

  useEffect(() => {
    console.log("last check", lastCheck);
  }, [lastCheck]);
};
