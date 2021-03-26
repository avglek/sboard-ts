import { combineReducers } from "redux";
import { navbarReduser } from "./navbarReducer";
import { mapSvgReduser } from "./mapSvgReducer";

export const rootReducer = combineReducers({
  navbar: navbarReduser,
  mapsvg: mapSvgReduser,
});

export type RootState = ReturnType<typeof rootReducer>;
