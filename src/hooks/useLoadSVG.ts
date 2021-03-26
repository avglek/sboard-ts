import { xml } from "d3";
import { useState } from "react";
import { getMapConfig } from "../utils/mapUtils";

const useLoadSVG = (selector: string) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const url = getMapConfig(selector)?.url;

  async function load(url: string) {
    try {
      setLoading(true);
      const svg = await xml(url);
      setLoading(false);
      const result = svg.documentElement;
      result.setAttribute("preserveAspectRatio", "xMidYMin");
      return result;
    } catch (e) {
      setError(e);
      return null;
    }
  }

  const loadSVG = () => load(url!)

  return {loading,error,loadSVG}
};

export default useLoadSVG
