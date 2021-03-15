import { combineReducers } from "redux";
import { navbarReduser } from "./navbarReducer";

export const rootReducer = combineReducers({
  navbar: navbarReduser,
});

export type RootState = ReturnType<typeof rootReducer>;
