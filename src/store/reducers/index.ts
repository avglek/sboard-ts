import { combineReducers } from "redux";
import { navbarReduser } from "./navbarReducer";
import { mapSvgReduser } from "./mapSvgReducer";
import { forecastReduser } from "./forecastReducer";
import {mapConfReducer} from "./mapConfReducer"

export const rootReducer = combineReducers({
  navbar: navbarReduser,
  mapsvg: mapSvgReduser,
  forecast: forecastReduser,
  mapconf: mapConfReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
