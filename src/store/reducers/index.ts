import { combineReducers } from "redux";
import { navbarReduser } from "./navbarReducer";
import { mapSvgReduser } from "./mapSvgReducer";
import { forecastReduser } from "./forecastReducer";
import { mapToggleReducer } from "./mapToggleReducer";
import { stantionReduser } from "./stantionReducer";
import { picketReducer } from "./picketReducer";
import { reportReduser } from "./reportReducer";
import { layerReduser } from "./layerReducer";
import { stormReducer } from "./stormReducer";

export const rootReducer = combineReducers({
  navbar: navbarReduser,
  mapsvg: mapSvgReduser,
  forecast: forecastReduser,
  mapToggle: mapToggleReducer,
  stantion: stantionReduser,
  picket: picketReducer,
  report: reportReduser,
  layer: layerReduser,
  storm: stormReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
