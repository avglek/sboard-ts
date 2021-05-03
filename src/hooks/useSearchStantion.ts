import { useEffect } from "react";
import { showFindStantion } from "../utils/layerUtils";
import { useTypedSelector } from "./useTypedSelector";

export const useSearchStantion = () => {
  const { findCode } = useTypedSelector((state) => state.layer);
  const { success } = useTypedSelector((state) => state.mapsvg);

  useEffect(() => {
    if (success) {
      showFindStantion(findCode);
    }
  }, [success, findCode]);
};
