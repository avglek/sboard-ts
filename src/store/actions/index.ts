import * as navbarAction from "./navbarAction";
import * as mapSvgAction from "./mapSvgAction";
import * as forecastAction from "./forecatsAction";
import * as mapConfAction from "./mapToggleAction";
import * as stantionAction from "./stantionAction";
import * as picketAction from "./picketAction";
import * as reportAction from "./reportAction";
import * as layerAction from "./layerAction";

export const Actions = {
  ...navbarAction,
  ...mapSvgAction,
  ...forecastAction,
  ...mapConfAction,
  ...stantionAction,
  ...picketAction,
  ...reportAction,
  ...layerAction,
};
